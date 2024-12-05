# `dataOciDataintegrationWorkspaceApplicationSchedules` Submodule <a name="`dataOciDataintegrationWorkspaceApplicationSchedules` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataintegrationWorkspaceApplicationSchedules <a name="DataOciDataintegrationWorkspaceApplicationSchedules" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules oci_dataintegration_workspace_application_schedules}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedules(scope Construct, id *string, config DataOciDataintegrationWorkspaceApplicationSchedulesConfig) DataOciDataintegrationWorkspaceApplicationSchedules
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig">DataOciDataintegrationWorkspaceApplicationSchedulesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig">DataOciDataintegrationWorkspaceApplicationSchedulesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetId"></a>

```go
func ResetId()
```

##### `ResetIdentifier` <a name="ResetIdentifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetIdentifier"></a>

```go
func ResetIdentifier()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetKey"></a>

```go
func ResetKey()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationSchedules resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedules_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedules_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedules_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedules_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataintegrationWorkspaceApplicationSchedules resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataintegrationWorkspaceApplicationSchedules to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataintegrationWorkspaceApplicationSchedules that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataintegrationWorkspaceApplicationSchedules to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationSchedulesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.scheduleSummaryCollection">ScheduleSummaryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKeyInput">ApplicationKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifierInput">IdentifierInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.keyInput">KeyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.typeInput">TypeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifier">Identifier</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.key">Key</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.type">Type</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filter"></a>

```go
func Filter() DataOciDataintegrationWorkspaceApplicationSchedulesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList">DataOciDataintegrationWorkspaceApplicationSchedulesFilterList</a>

---

##### `ScheduleSummaryCollection`<sup>Required</sup> <a name="ScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.scheduleSummaryCollection"></a>

```go
func ScheduleSummaryCollection() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList</a>

---

##### `ApplicationKeyInput`<sup>Optional</sup> <a name="ApplicationKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKeyInput"></a>

```go
func ApplicationKeyInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifierInput"></a>

```go
func IdentifierInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.keyInput"></a>

```go
func KeyInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.typeInput"></a>

```go
func TypeInput() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.identifier"></a>

```go
func Identifier() *[]*string
```

- *Type:* *[]*string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.key"></a>

```go
func Key() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.type"></a>

```go
func Type() *[]*string
```

- *Type:* *[]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedules.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataintegrationWorkspaceApplicationSchedulesConfig <a name="DataOciDataintegrationWorkspaceApplicationSchedulesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationKey: *string,
	WorkspaceId: *string,
	Filter: interface{},
	Id: *string,
	Identifier: *[]*string,
	Key: *[]*string,
	Name: *string,
	Type: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.identifier">Identifier</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.key">Key</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.type">Type</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.applicationKey"></a>

```go
ApplicationKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#application_key DataOciDataintegrationWorkspaceApplicationSchedules#application_key}.

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#workspace_id DataOciDataintegrationWorkspaceApplicationSchedules#workspace_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#filter DataOciDataintegrationWorkspaceApplicationSchedules#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#id DataOciDataintegrationWorkspaceApplicationSchedules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.identifier"></a>

```go
Identifier *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#identifier DataOciDataintegrationWorkspaceApplicationSchedules#identifier}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.key"></a>

```go
Key *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#key DataOciDataintegrationWorkspaceApplicationSchedules#key}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesConfig.property.type"></a>

```go
Type *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#type DataOciDataintegrationWorkspaceApplicationSchedules#type}.

---

### DataOciDataintegrationWorkspaceApplicationSchedulesFilter <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#values DataOciDataintegrationWorkspaceApplicationSchedules#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#regex DataOciDataintegrationWorkspaceApplicationSchedules#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#name DataOciDataintegrationWorkspaceApplicationSchedules#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#values DataOciDataintegrationWorkspaceApplicationSchedules#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/dataintegration_workspace_application_schedules#regex DataOciDataintegrationWorkspaceApplicationSchedules#regex}.

---

### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef {

}
```


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

&dataocidataintegrationworkspaceapplicationschedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataintegrationWorkspaceApplicationSchedulesFilterList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.customExpression">CustomExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.days">Days</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.time">Time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.weekOfMonth">WeekOfMonth</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomExpression`<sup>Required</sup> <a name="CustomExpression" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.customExpression"></a>

```go
func CustomExpression() *string
```

- *Type:* *string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.dayOfWeek"></a>

```go
func DayOfWeek() *string
```

- *Type:* *string

---

##### `Days`<sup>Required</sup> <a name="Days" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.days"></a>

```go
func Days() *[]*f64
```

- *Type:* *[]*f64

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `Time`<sup>Required</sup> <a name="Time" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.time"></a>

```go
func Time() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList</a>

---

##### `WeekOfMonth`<sup>Required</sup> <a name="WeekOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.weekOfMonth"></a>

```go
func WeekOfMonth() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetails</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.hour">Hour</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.minute">Minute</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.second">Second</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hour`<sup>Required</sup> <a name="Hour" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.hour"></a>

```go
func Hour() *f64
```

- *Type:* *f64

---

##### `Minute`<sup>Required</sup> <a name="Minute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.minute"></a>

```go
func Minute() *f64
```

- *Type:* *f64

---

##### `Second`<sup>Required</sup> <a name="Second" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.second"></a>

```go
func Second() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTimeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsTime</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregator</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount">ObjectCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType">ObjectType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectCount`<sup>Required</sup> <a name="ObjectCount" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectCount"></a>

```go
func ObjectCount() *string
```

- *Type:* *string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.objectType"></a>

```go
func ObjectType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStruct</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList">ObjectTypeCountList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectTypeCountList`<sup>Required</sup> <a name="ObjectTypeCountList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.objectTypeCountList"></a>

```go
func ObjectTypeCountList() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsObjectTypeCountListStructList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatistics</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator">Aggregator</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics">CountStatistics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName">CreatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath">IdentifierPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields">InfoFields</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName">UpdatedByName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aggregator`<sup>Required</sup> <a name="Aggregator" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregator"></a>

```go
func Aggregator() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataAggregatorList</a>

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `CountStatistics`<sup>Required</sup> <a name="CountStatistics" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.countStatistics"></a>

```go
func CountStatistics() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataCountStatisticsList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `CreatedByName`<sup>Required</sup> <a name="CreatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.createdByName"></a>

```go
func CreatedByName() *string
```

- *Type:* *string

---

##### `IdentifierPath`<sup>Required</sup> <a name="IdentifierPath" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.identifierPath"></a>

```go
func IdentifierPath() *string
```

- *Type:* *string

---

##### `InfoFields`<sup>Required</sup> <a name="InfoFields" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.infoFields"></a>

```go
func InfoFields() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `UpdatedByName`<sup>Required</sup> <a name="UpdatedByName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.updatedByName"></a>

```go
func UpdatedByName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.applicationKey">ApplicationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.frequencyDetails">FrequencyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.isDaylightAdjustmentEnabled">IsDaylightAdjustmentEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.metadata">Metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelType">ModelType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectStatus">ObjectStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectVersion">ObjectVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.parentRef">ParentRef</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.registryMetadata">RegistryMetadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationKey`<sup>Required</sup> <a name="ApplicationKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.applicationKey"></a>

```go
func ApplicationKey() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FrequencyDetails`<sup>Required</sup> <a name="FrequencyDetails" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.frequencyDetails"></a>

```go
func FrequencyDetails() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsFrequencyDetailsList</a>

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `IsDaylightAdjustmentEnabled`<sup>Required</sup> <a name="IsDaylightAdjustmentEnabled" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.isDaylightAdjustmentEnabled"></a>

```go
func IsDaylightAdjustmentEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.metadata"></a>

```go
func Metadata() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsMetadataList</a>

---

##### `ModelType`<sup>Required</sup> <a name="ModelType" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelType"></a>

```go
func ModelType() *string
```

- *Type:* *string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.modelVersion"></a>

```go
func ModelVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ObjectStatus`<sup>Required</sup> <a name="ObjectStatus" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectStatus"></a>

```go
func ObjectStatus() *f64
```

- *Type:* *f64

---

##### `ObjectVersion`<sup>Required</sup> <a name="ObjectVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.objectVersion"></a>

```go
func ObjectVersion() *f64
```

- *Type:* *f64

---

##### `ParentRef`<sup>Required</sup> <a name="ParentRef" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.parentRef"></a>

```go
func ParentRef() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList</a>

---

##### `RegistryMetadata`<sup>Required</sup> <a name="RegistryMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.registryMetadata"></a>

```go
func RegistryMetadata() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItems</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId">RootDocId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `RootDocId`<sup>Required</sup> <a name="RootDocId" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.rootDocId"></a>

```go
func RootDocId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRefOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsParentRef</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey">AggregatorKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite">IsFavorite</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion">RegistryVersion</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatorKey`<sup>Required</sup> <a name="AggregatorKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.aggregatorKey"></a>

```go
func AggregatorKey() *string
```

- *Type:* *string

---

##### `IsFavorite`<sup>Required</sup> <a name="IsFavorite" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.isFavorite"></a>

```go
func IsFavorite() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RegistryVersion`<sup>Required</sup> <a name="RegistryVersion" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.registryVersion"></a>

```go
func RegistryVersion() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsRegistryMetadata</a>

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference <a name="DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidataintegrationworkspaceapplicationschedules"

dataocidataintegrationworkspaceapplicationschedules.NewDataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataintegrationWorkspaceApplicationSchedules.DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection">DataOciDataintegrationWorkspaceApplicationSchedulesScheduleSummaryCollection</a>

---



