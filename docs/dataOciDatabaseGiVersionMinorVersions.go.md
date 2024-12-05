# `dataOciDatabaseGiVersionMinorVersions` Submodule <a name="`dataOciDatabaseGiVersionMinorVersions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseGiVersionMinorVersions <a name="DataOciDatabaseGiVersionMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions oci_database_gi_version_minor_versions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.NewDataOciDatabaseGiVersionMinorVersions(scope Construct, id *string, config DataOciDatabaseGiVersionMinorVersionsConfig) DataOciDatabaseGiVersionMinorVersions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig">DataOciDatabaseGiVersionMinorVersionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig">DataOciDatabaseGiVersionMinorVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetAvailabilityDomain">ResetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetIsGiVersionForProvisioning">ResetIsGiVersionForProvisioning</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShape">ResetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShapeFamily">ResetShapeFamily</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAvailabilityDomain` <a name="ResetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetAvailabilityDomain"></a>

```go
func ResetAvailabilityDomain()
```

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetId"></a>

```go
func ResetId()
```

##### `ResetIsGiVersionForProvisioning` <a name="ResetIsGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetIsGiVersionForProvisioning"></a>

```go
func ResetIsGiVersionForProvisioning()
```

##### `ResetShape` <a name="ResetShape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShape"></a>

```go
func ResetShape()
```

##### `ResetShapeFamily` <a name="ResetShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.resetShapeFamily"></a>

```go
func ResetShapeFamily()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseGiVersionMinorVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.DataOciDatabaseGiVersionMinorVersions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.DataOciDatabaseGiVersionMinorVersions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.DataOciDatabaseGiVersionMinorVersions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.DataOciDatabaseGiVersionMinorVersions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseGiVersionMinorVersions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseGiVersionMinorVersions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseGiVersionMinorVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseGiVersionMinorVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList">DataOciDatabaseGiVersionMinorVersionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.giMinorVersions">GiMinorVersions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList">DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioningInput">IsGiVersionForProvisioningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamilyInput">ShapeFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioning">IsGiVersionForProvisioning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamily">ShapeFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filter"></a>

```go
func Filter() DataOciDatabaseGiVersionMinorVersionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList">DataOciDatabaseGiVersionMinorVersionsFilterList</a>

---

##### `GiMinorVersions`<sup>Required</sup> <a name="GiMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.giMinorVersions"></a>

```go
func GiMinorVersions() DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList">DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsGiVersionForProvisioningInput`<sup>Optional</sup> <a name="IsGiVersionForProvisioningInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioningInput"></a>

```go
func IsGiVersionForProvisioningInput() interface{}
```

- *Type:* interface{}

---

##### `ShapeFamilyInput`<sup>Optional</sup> <a name="ShapeFamilyInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamilyInput"></a>

```go
func ShapeFamilyInput() *string
```

- *Type:* *string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsGiVersionForProvisioning`<sup>Required</sup> <a name="IsGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.isGiVersionForProvisioning"></a>

```go
func IsGiVersionForProvisioning() interface{}
```

- *Type:* interface{}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `ShapeFamily`<sup>Required</sup> <a name="ShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.shapeFamily"></a>

```go
func ShapeFamily() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseGiVersionMinorVersionsConfig <a name="DataOciDatabaseGiVersionMinorVersionsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

&dataocidatabasegiversionminorversions.DataOciDatabaseGiVersionMinorVersionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Version: *string,
	AvailabilityDomain: *string,
	CompartmentId: *string,
	Filter: interface{},
	Id: *string,
	IsGiVersionForProvisioning: interface{},
	Shape: *string,
	ShapeFamily: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#version DataOciDatabaseGiVersionMinorVersions#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#availability_domain DataOciDatabaseGiVersionMinorVersions#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#compartment_id DataOciDatabaseGiVersionMinorVersions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#id DataOciDatabaseGiVersionMinorVersions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.isGiVersionForProvisioning">IsGiVersionForProvisioning</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#is_gi_version_for_provisioning DataOciDatabaseGiVersionMinorVersions#is_gi_version_for_provisioning}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape DataOciDatabaseGiVersionMinorVersions#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shapeFamily">ShapeFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape_family DataOciDatabaseGiVersionMinorVersions#shape_family}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#version DataOciDatabaseGiVersionMinorVersions#version}.

---

##### `AvailabilityDomain`<sup>Optional</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#availability_domain DataOciDatabaseGiVersionMinorVersions#availability_domain}.

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#compartment_id DataOciDatabaseGiVersionMinorVersions#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#filter DataOciDatabaseGiVersionMinorVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#id DataOciDatabaseGiVersionMinorVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsGiVersionForProvisioning`<sup>Optional</sup> <a name="IsGiVersionForProvisioning" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.isGiVersionForProvisioning"></a>

```go
IsGiVersionForProvisioning interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#is_gi_version_for_provisioning DataOciDatabaseGiVersionMinorVersions#is_gi_version_for_provisioning}.

---

##### `Shape`<sup>Optional</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape DataOciDatabaseGiVersionMinorVersions#shape}.

---

##### `ShapeFamily`<sup>Optional</sup> <a name="ShapeFamily" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsConfig.property.shapeFamily"></a>

```go
ShapeFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#shape_family DataOciDatabaseGiVersionMinorVersions#shape_family}.

---

### DataOciDatabaseGiVersionMinorVersionsFilter <a name="DataOciDatabaseGiVersionMinorVersionsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

&dataocidatabasegiversionminorversions.DataOciDatabaseGiVersionMinorVersionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#name DataOciDatabaseGiVersionMinorVersions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#values DataOciDatabaseGiVersionMinorVersions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#regex DataOciDatabaseGiVersionMinorVersions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#name DataOciDatabaseGiVersionMinorVersions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#values DataOciDatabaseGiVersionMinorVersions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_gi_version_minor_versions#regex DataOciDatabaseGiVersionMinorVersions#regex}.

---

### DataOciDatabaseGiVersionMinorVersionsGiMinorVersions <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

&dataocidatabasegiversionminorversions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseGiVersionMinorVersionsFilterList <a name="DataOciDatabaseGiVersionMinorVersionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.NewDataOciDatabaseGiVersionMinorVersionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseGiVersionMinorVersionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseGiVersionMinorVersionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseGiVersionMinorVersionsFilterOutputReference <a name="DataOciDatabaseGiVersionMinorVersionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.NewDataOciDatabaseGiVersionMinorVersionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseGiVersionMinorVersionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.NewDataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference <a name="DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasegiversionminorversions"

dataocidatabasegiversionminorversions.NewDataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.gridImageId">GridImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions">DataOciDatabaseGiVersionMinorVersionsGiMinorVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GridImageId`<sup>Required</sup> <a name="GridImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.gridImageId"></a>

```go
func GridImageId() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseGiVersionMinorVersionsGiMinorVersions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseGiVersionMinorVersions.DataOciDatabaseGiVersionMinorVersionsGiMinorVersions">DataOciDatabaseGiVersionMinorVersionsGiMinorVersions</a>

---



