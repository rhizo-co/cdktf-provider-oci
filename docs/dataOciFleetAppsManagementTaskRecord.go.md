# `dataOciFleetAppsManagementTaskRecord` Submodule <a name="`dataOciFleetAppsManagementTaskRecord` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementTaskRecord <a name="DataOciFleetAppsManagementTaskRecord" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record oci_fleet_apps_management_task_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecord(scope Construct, id *string, config DataOciFleetAppsManagementTaskRecordConfig) DataOciFleetAppsManagementTaskRecord
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig">DataOciFleetAppsManagementTaskRecordConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig">DataOciFleetAppsManagementTaskRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecord_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecord_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecord_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecord_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecord resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementTaskRecord to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementTaskRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementTaskRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList">DataOciFleetAppsManagementTaskRecordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordIdInput">TaskRecordIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordId">TaskRecordId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.details"></a>

```go
func Details() DataOciFleetAppsManagementTaskRecordDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList">DataOciFleetAppsManagementTaskRecordDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TaskRecordIdInput`<sup>Optional</sup> <a name="TaskRecordIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordIdInput"></a>

```go
func TaskRecordIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TaskRecordId`<sup>Required</sup> <a name="TaskRecordId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordId"></a>

```go
func TaskRecordId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementTaskRecordConfig <a name="DataOciFleetAppsManagementTaskRecordConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

&dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecordConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TaskRecordId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.taskRecordId">TaskRecordId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#task_record_id DataOciFleetAppsManagementTaskRecord#task_record_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#id DataOciFleetAppsManagementTaskRecord#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TaskRecordId`<sup>Required</sup> <a name="TaskRecordId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.taskRecordId"></a>

```go
TaskRecordId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#task_record_id DataOciFleetAppsManagementTaskRecord#task_record_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#id DataOciFleetAppsManagementTaskRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementTaskRecordDetails <a name="DataOciFleetAppsManagementTaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

&dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecordDetails {

}
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

&dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails {

}
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

&dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent {

}
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

&dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables {

}
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

&dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables {

}
```


### DataOciFleetAppsManagementTaskRecordDetailsProperties <a name="DataOciFleetAppsManagementTaskRecordDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

&dataocifleetappsmanagementtaskrecord.DataOciFleetAppsManagementTaskRecordDetailsProperties {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.content">Content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.executionType">ExecutionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.content"></a>

```go
func Content() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `ExecutionType`<sup>Required</sup> <a name="ExecutionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.executionType"></a>

```go
func ExecutionType() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.variables"></a>

```go
func Variables() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">OutputVariables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```go
func InputVariables() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```go
func OutputVariables() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsList <a name="DataOciFleetAppsManagementTaskRecordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.executionDetails">ExecutionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.osType">OsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails">DataOciFleetAppsManagementTaskRecordDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExecutionDetails`<sup>Required</sup> <a name="ExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.executionDetails"></a>

```go
func ExecutionDetails() DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList</a>

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.osType"></a>

```go
func OsType() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.properties"></a>

```go
func Properties() DataOciFleetAppsManagementTaskRecordDetailsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordDetailsPropertiesList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails">DataOciFleetAppsManagementTaskRecordDetails</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsPropertiesList <a name="DataOciFleetAppsManagementTaskRecordDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementTaskRecordDetailsPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementtaskrecord"

dataocifleetappsmanagementtaskrecord.NewDataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.numRetries">NumRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties">DataOciFleetAppsManagementTaskRecordDetailsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.numRetries"></a>

```go
func NumRetries() *f64
```

- *Type:* *f64

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementTaskRecordDetailsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties">DataOciFleetAppsManagementTaskRecordDetailsProperties</a>

---



