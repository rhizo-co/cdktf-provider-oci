# `dataOciFleetSoftwareUpdateFsuCycles` Submodule <a name="`dataOciFleetSoftwareUpdateFsuCycles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetSoftwareUpdateFsuCycles <a name="DataOciFleetSoftwareUpdateFsuCycles" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles oci_fleet_software_update_fsu_cycles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCycles(scope Construct, id *string, config DataOciFleetSoftwareUpdateFsuCyclesConfig) DataOciFleetSoftwareUpdateFsuCycles
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig">DataOciFleetSoftwareUpdateFsuCyclesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig">DataOciFleetSoftwareUpdateFsuCyclesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetCollectionType">ResetCollectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFsuCollectionId">ResetFsuCollectionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetTargetVersion">ResetTargetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCollectionType` <a name="ResetCollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetCollectionType"></a>

```go
func ResetCollectionType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFsuCollectionId` <a name="ResetFsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetFsuCollectionId"></a>

```go
func ResetFsuCollectionId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetState"></a>

```go
func ResetState()
```

##### `ResetTargetVersion` <a name="ResetTargetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.resetTargetVersion"></a>

```go
func ResetTargetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCycles_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCycles_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCycles_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCycles_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetSoftwareUpdateFsuCycles resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetSoftwareUpdateFsuCycles to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetSoftwareUpdateFsuCycles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetSoftwareUpdateFsuCycles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList">DataOciFleetSoftwareUpdateFsuCyclesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCycleSummaryCollection">FsuCycleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionTypeInput">CollectionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionIdInput">FsuCollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersionInput">TargetVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionType">CollectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionId">FsuCollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filter"></a>

```go
func Filter() DataOciFleetSoftwareUpdateFsuCyclesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList">DataOciFleetSoftwareUpdateFsuCyclesFilterList</a>

---

##### `FsuCycleSummaryCollection`<sup>Required</sup> <a name="FsuCycleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCycleSummaryCollection"></a>

```go
func FsuCycleSummaryCollection() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList</a>

---

##### `CollectionTypeInput`<sup>Optional</sup> <a name="CollectionTypeInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionTypeInput"></a>

```go
func CollectionTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `FsuCollectionIdInput`<sup>Optional</sup> <a name="FsuCollectionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionIdInput"></a>

```go
func FsuCollectionIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetVersionInput`<sup>Optional</sup> <a name="TargetVersionInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersionInput"></a>

```go
func TargetVersionInput() *string
```

- *Type:* *string

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.collectionType"></a>

```go
func CollectionType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.fsuCollectionId"></a>

```go
func FsuCollectionId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetVersion`<sup>Required</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.targetVersion"></a>

```go
func TargetVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCycles.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetSoftwareUpdateFsuCyclesConfig <a name="DataOciFleetSoftwareUpdateFsuCyclesConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CollectionType: *string,
	DisplayName: *string,
	Filter: interface{},
	FsuCollectionId: *string,
	Id: *string,
	State: *string,
	TargetVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#compartment_id DataOciFleetSoftwareUpdateFsuCycles#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.collectionType">CollectionType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#collection_type DataOciFleetSoftwareUpdateFsuCycles#collection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#display_name DataOciFleetSoftwareUpdateFsuCycles#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.fsuCollectionId">FsuCollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#fsu_collection_id DataOciFleetSoftwareUpdateFsuCycles#fsu_collection_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#id DataOciFleetSoftwareUpdateFsuCycles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#state DataOciFleetSoftwareUpdateFsuCycles#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.targetVersion">TargetVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#target_version DataOciFleetSoftwareUpdateFsuCycles#target_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#compartment_id DataOciFleetSoftwareUpdateFsuCycles#compartment_id}.

---

##### `CollectionType`<sup>Optional</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.collectionType"></a>

```go
CollectionType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#collection_type DataOciFleetSoftwareUpdateFsuCycles#collection_type}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#display_name DataOciFleetSoftwareUpdateFsuCycles#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#filter DataOciFleetSoftwareUpdateFsuCycles#filter}

---

##### `FsuCollectionId`<sup>Optional</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.fsuCollectionId"></a>

```go
FsuCollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#fsu_collection_id DataOciFleetSoftwareUpdateFsuCycles#fsu_collection_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#id DataOciFleetSoftwareUpdateFsuCycles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#state DataOciFleetSoftwareUpdateFsuCycles#state}.

---

##### `TargetVersion`<sup>Optional</sup> <a name="TargetVersion" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesConfig.property.targetVersion"></a>

```go
TargetVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#target_version DataOciFleetSoftwareUpdateFsuCycles#target_version}.

---

### DataOciFleetSoftwareUpdateFsuCyclesFilter <a name="DataOciFleetSoftwareUpdateFsuCyclesFilter" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#name DataOciFleetSoftwareUpdateFsuCycles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#values DataOciFleetSoftwareUpdateFsuCycles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#regex DataOciFleetSoftwareUpdateFsuCycles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#name DataOciFleetSoftwareUpdateFsuCycles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#values DataOciFleetSoftwareUpdateFsuCycles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_software_update_fsu_cycles#regex DataOciFleetSoftwareUpdateFsuCycles#regex}.

---

### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection {

}
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems {

}
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule {

}
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy {

}
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection {

}
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails {

}
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute {

}
```


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

&dataocifleetsoftwareupdatefsucycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetSoftwareUpdateFsuCyclesFilterList <a name="DataOciFleetSoftwareUpdateFsuCyclesFilterList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.timeToStart">TimeToStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.timeToStart"></a>

```go
func TimeToStart() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isForceRolling">IsForceRolling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isWaitForBatchResume">IsWaitForBatchResume</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsForceRolling`<sup>Required</sup> <a name="IsForceRolling" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isForceRolling"></a>

```go
func IsForceRolling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsWaitForBatchResume`<sup>Required</sup> <a name="IsWaitForBatchResume" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.isWaitForBatchResume"></a>

```go
func IsWaitForBatchResume() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategy</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.logCollectionMode">LogCollectionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogCollectionMode`<sup>Required</sup> <a name="LogCollectionMode" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.logCollectionMode"></a>

```go
func LogCollectionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollection</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.homePolicy">HomePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.newHomePrefix">NewHomePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.softwareImageId">SoftwareImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HomePolicy`<sup>Required</sup> <a name="HomePolicy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.homePolicy"></a>

```go
func HomePolicy() *string
```

- *Type:* *string

---

##### `NewHomePrefix`<sup>Required</sup> <a name="NewHomePrefix" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.newHomePrefix"></a>

```go
func NewHomePrefix() *string
```

- *Type:* *string

---

##### `SoftwareImageId`<sup>Required</sup> <a name="SoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.softwareImageId"></a>

```go
func SoftwareImageId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetails</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.timeToStart">TimeToStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.timeToStart"></a>

```go
func TimeToStart() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecute</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.applyActionSchedule">ApplyActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.batchingStrategy">BatchingStrategy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.collectionType">CollectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.diagnosticsCollection">DiagnosticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.executingFsuActionId">ExecutingFsuActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fsuCollectionId">FsuCollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.goalVersionDetails">GoalVersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnoreMissingPatches">IsIgnoreMissingPatches</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnorePatches">IsIgnorePatches</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isKeepPlacement">IsKeepPlacement</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lastCompletedAction">LastCompletedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.maxDrainTimeoutInSeconds">MaxDrainTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.nextActionToExecute">NextActionToExecute</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.stageActionSchedule">StageActionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplyActionSchedule`<sup>Required</sup> <a name="ApplyActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.applyActionSchedule"></a>

```go
func ApplyActionSchedule() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsApplyActionScheduleList</a>

---

##### `BatchingStrategy`<sup>Required</sup> <a name="BatchingStrategy" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.batchingStrategy"></a>

```go
func BatchingStrategy() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsBatchingStrategyList</a>

---

##### `CollectionType`<sup>Required</sup> <a name="CollectionType" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.collectionType"></a>

```go
func CollectionType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DiagnosticsCollection`<sup>Required</sup> <a name="DiagnosticsCollection" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.diagnosticsCollection"></a>

```go
func DiagnosticsCollection() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsDiagnosticsCollectionList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutingFsuActionId`<sup>Required</sup> <a name="ExecutingFsuActionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.executingFsuActionId"></a>

```go
func ExecutingFsuActionId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FsuCollectionId`<sup>Required</sup> <a name="FsuCollectionId" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.fsuCollectionId"></a>

```go
func FsuCollectionId() *string
```

- *Type:* *string

---

##### `GoalVersionDetails`<sup>Required</sup> <a name="GoalVersionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.goalVersionDetails"></a>

```go
func GoalVersionDetails() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsGoalVersionDetailsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIgnoreMissingPatches`<sup>Required</sup> <a name="IsIgnoreMissingPatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnoreMissingPatches"></a>

```go
func IsIgnoreMissingPatches() *[]*string
```

- *Type:* *[]*string

---

##### `IsIgnorePatches`<sup>Required</sup> <a name="IsIgnorePatches" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isIgnorePatches"></a>

```go
func IsIgnorePatches() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsKeepPlacement`<sup>Required</sup> <a name="IsKeepPlacement" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.isKeepPlacement"></a>

```go
func IsKeepPlacement() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastCompletedAction`<sup>Required</sup> <a name="LastCompletedAction" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lastCompletedAction"></a>

```go
func LastCompletedAction() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `MaxDrainTimeoutInSeconds`<sup>Required</sup> <a name="MaxDrainTimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.maxDrainTimeoutInSeconds"></a>

```go
func MaxDrainTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `NextActionToExecute`<sup>Required</sup> <a name="NextActionToExecute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.nextActionToExecute"></a>

```go
func NextActionToExecute() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsNextActionToExecuteList</a>

---

##### `StageActionSchedule`<sup>Required</sup> <a name="StageActionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.stageActionSchedule"></a>

```go
func StageActionSchedule() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItems</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.timeToStart">TimeToStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeToStart`<sup>Required</sup> <a name="TimeToStart" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.timeToStart"></a>

```go
func TimeToStart() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsStageActionSchedule</a>

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference <a name="DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetsoftwareupdatefsucycles"

dataocifleetsoftwareupdatefsucycles.NewDataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetSoftwareUpdateFsuCycles.DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection">DataOciFleetSoftwareUpdateFsuCyclesFsuCycleSummaryCollection</a>

---



