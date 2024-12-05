# `dataOciDatacatalogCatalogPrivateEndpoints` Submodule <a name="`dataOciDatacatalogCatalogPrivateEndpoints` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatacatalogCatalogPrivateEndpoints <a name="DataOciDatacatalogCatalogPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints oci_datacatalog_catalog_private_endpoints}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.NewDataOciDatacatalogCatalogPrivateEndpoints(scope Construct, id *string, config DataOciDatacatalogCatalogPrivateEndpointsConfig) DataOciDatacatalogCatalogPrivateEndpoints
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig">DataOciDatacatalogCatalogPrivateEndpointsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig">DataOciDatacatalogCatalogPrivateEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatacatalogCatalogPrivateEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpoints_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpoints_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpoints_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpoints_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatacatalogCatalogPrivateEndpoints resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatacatalogCatalogPrivateEndpoints to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatacatalogCatalogPrivateEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatacatalogCatalogPrivateEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.catalogPrivateEndpoints">CatalogPrivateEndpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList">DataOciDatacatalogCatalogPrivateEndpointsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CatalogPrivateEndpoints`<sup>Required</sup> <a name="CatalogPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.catalogPrivateEndpoints"></a>

```go
func CatalogPrivateEndpoints() DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filter"></a>

```go
func Filter() DataOciDatacatalogCatalogPrivateEndpointsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList">DataOciDatacatalogCatalogPrivateEndpointsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpoints.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

&dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints {

}
```


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

&dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks {

}
```


### DataOciDatacatalogCatalogPrivateEndpointsConfig <a name="DataOciDatacatalogCatalogPrivateEndpointsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

&dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#compartment_id DataOciDatacatalogCatalogPrivateEndpoints#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#display_name DataOciDatacatalogCatalogPrivateEndpoints#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#id DataOciDatacatalogCatalogPrivateEndpoints#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#state DataOciDatacatalogCatalogPrivateEndpoints#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#compartment_id DataOciDatacatalogCatalogPrivateEndpoints#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#display_name DataOciDatacatalogCatalogPrivateEndpoints#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#filter DataOciDatacatalogCatalogPrivateEndpoints#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#id DataOciDatacatalogCatalogPrivateEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#state DataOciDatacatalogCatalogPrivateEndpoints#state}.

---

### DataOciDatacatalogCatalogPrivateEndpointsFilter <a name="DataOciDatacatalogCatalogPrivateEndpointsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

&dataocidatacatalogcatalogprivateendpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#name DataOciDatacatalogCatalogPrivateEndpoints#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#values DataOciDatacatalogCatalogPrivateEndpoints#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#regex DataOciDatacatalogCatalogPrivateEndpoints#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#name DataOciDatacatalogCatalogPrivateEndpoints#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#values DataOciDatacatalogCatalogPrivateEndpoints#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datacatalog_catalog_private_endpoints#regex DataOciDatacatalogCatalogPrivateEndpoints#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.NewDataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.get"></a>

```go
func Get(index *f64) DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.NewDataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.get"></a>

```go
func Get(index *f64) DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.NewDataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocks</a>

---


### DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference <a name="DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.NewDataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.attachedCatalogs">AttachedCatalogs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.dnsZones">DnsZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachedCatalogs`<sup>Required</sup> <a name="AttachedCatalogs" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.attachedCatalogs"></a>

```go
func AttachedCatalogs() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DnsZones`<sup>Required</sup> <a name="DnsZones" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.dnsZones"></a>

```go
func DnsZones() *[]*string
```

- *Type:* *[]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.locks"></a>

```go
func Locks() DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints">DataOciDatacatalogCatalogPrivateEndpointsCatalogPrivateEndpoints</a>

---


### DataOciDatacatalogCatalogPrivateEndpointsFilterList <a name="DataOciDatacatalogCatalogPrivateEndpointsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.NewDataOciDatacatalogCatalogPrivateEndpointsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatacatalogCatalogPrivateEndpointsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference <a name="DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatacatalogcatalogprivateendpoints"

dataocidatacatalogcatalogprivateendpoints.NewDataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatacatalogCatalogPrivateEndpoints.DataOciDatacatalogCatalogPrivateEndpointsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



