# `dataOciFunctionsPbfListingVersions` Submodule <a name="`dataOciFunctionsPbfListingVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFunctionsPbfListingVersions <a name="DataOciFunctionsPbfListingVersions" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions oci_functions_pbf_listing_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersions(scope Construct, id *string, config DataOciFunctionsPbfListingVersionsConfig) DataOciFunctionsPbfListingVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig">DataOciFunctionsPbfListingVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig">DataOciFunctionsPbfListingVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion">ResetIsCurrentVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId">ResetPbfListingVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetIsCurrentVersion` <a name="ResetIsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetIsCurrentVersion"></a>

```go
func ResetIsCurrentVersion()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetName"></a>

```go
func ResetName()
```

##### `ResetPbfListingVersionId` <a name="ResetPbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetPbfListingVersionId"></a>

```go
func ResetPbfListingVersionId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersions_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFunctionsPbfListingVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFunctionsPbfListingVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFunctionsPbfListingVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFunctionsPbfListingVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection">PbfListingVersionsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput">IsCurrentVersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput">PbfListingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput">PbfListingVersionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion">IsCurrentVersion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId">PbfListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId">PbfListingVersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filter"></a>

```go
func Filter() DataOciFunctionsPbfListingVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList">DataOciFunctionsPbfListingVersionsFilterList</a>

---

##### `PbfListingVersionsCollection`<sup>Required</sup> <a name="PbfListingVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionsCollection"></a>

```go
func PbfListingVersionsCollection() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsCurrentVersionInput`<sup>Optional</sup> <a name="IsCurrentVersionInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersionInput"></a>

```go
func IsCurrentVersionInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PbfListingIdInput`<sup>Optional</sup> <a name="PbfListingIdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingIdInput"></a>

```go
func PbfListingIdInput() *string
```

- *Type:* *string

---

##### `PbfListingVersionIdInput`<sup>Optional</sup> <a name="PbfListingVersionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionIdInput"></a>

```go
func PbfListingVersionIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsCurrentVersion`<sup>Required</sup> <a name="IsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.isCurrentVersion"></a>

```go
func IsCurrentVersion() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PbfListingId`<sup>Required</sup> <a name="PbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingId"></a>

```go
func PbfListingId() *string
```

- *Type:* *string

---

##### `PbfListingVersionId`<sup>Required</sup> <a name="PbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.pbfListingVersionId"></a>

```go
func PbfListingVersionId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFunctionsPbfListingVersionsConfig <a name="DataOciFunctionsPbfListingVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	PbfListingId: *string,
	Filter: interface{},
	Id: *string,
	IsCurrentVersion: interface{},
	Name: *string,
	PbfListingVersionId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId">PbfListingId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion">IsCurrentVersion</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId">PbfListingVersionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PbfListingId`<sup>Required</sup> <a name="PbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingId"></a>

```go
PbfListingId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_id DataOciFunctionsPbfListingVersions#pbf_listing_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#filter DataOciFunctionsPbfListingVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#id DataOciFunctionsPbfListingVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCurrentVersion`<sup>Optional</sup> <a name="IsCurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.isCurrentVersion"></a>

```go
IsCurrentVersion interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#is_current_version DataOciFunctionsPbfListingVersions#is_current_version}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `PbfListingVersionId`<sup>Optional</sup> <a name="PbfListingVersionId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.pbfListingVersionId"></a>

```go
PbfListingVersionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#pbf_listing_version_id DataOciFunctionsPbfListingVersions#pbf_listing_version_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#state DataOciFunctionsPbfListingVersions#state}.

---

### DataOciFunctionsPbfListingVersionsFilter <a name="DataOciFunctionsPbfListingVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#name DataOciFunctionsPbfListingVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#values DataOciFunctionsPbfListingVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/functions_pbf_listing_versions#regex DataOciFunctionsPbfListingVersions#regex}.

---

### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection {

}
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems {

}
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig {

}
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements {

}
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies {

}
```


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

&dataocifunctionspbflistingversions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFunctionsPbfListingVersionsFilterList <a name="DataOciFunctionsPbfListingVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFunctionsPbfListingVersionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get"></a>

```go
func Get(index *f64) DataOciFunctionsPbfListingVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFunctionsPbfListingVersionsFilterOutputReference <a name="DataOciFunctionsPbfListingVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFunctionsPbfListingVersionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get"></a>

```go
func Get(index *f64) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional">IsOptional</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsOptional`<sup>Required</sup> <a name="IsOptional" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.isOptional"></a>

```go
func IsOptional() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfig</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary">ChangeSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId">PbfListingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements">Requirements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers">Triggers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChangeSummary`<sup>Required</sup> <a name="ChangeSummary" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.changeSummary"></a>

```go
func ChangeSummary() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.config"></a>

```go
func Config() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsConfigList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PbfListingId`<sup>Required</sup> <a name="PbfListingId" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.pbfListingId"></a>

```go
func PbfListingId() *string
```

- *Type:* *string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.requirements"></a>

```go
func Requirements() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.triggers"></a>

```go
func Triggers() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItems</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get"></a>

```go
func Get(index *f64) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs">MinMemoryRequiredInMbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies">Policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MinMemoryRequiredInMbs`<sup>Required</sup> <a name="MinMemoryRequiredInMbs" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.minMemoryRequiredInMbs"></a>

```go
func MinMemoryRequiredInMbs() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.policies"></a>

```go
func Policies() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirements</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get"></a>

```go
func Get(index *f64) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsRequirementsPolicies</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get"></a>

```go
func Get(index *f64) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsTriggers</a>

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get"></a>

```go
func Get(index *f64) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference <a name="DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifunctionspbflistingversions"

dataocifunctionspbflistingversions.NewDataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFunctionsPbfListingVersions.DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection">DataOciFunctionsPbfListingVersionsPbfListingVersionsCollection</a>

---



