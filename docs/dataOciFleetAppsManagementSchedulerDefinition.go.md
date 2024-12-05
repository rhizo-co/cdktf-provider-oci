# `dataOciFleetAppsManagementSchedulerDefinition` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinition` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinition <a name="DataOciFleetAppsManagementSchedulerDefinition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinition(scope Construct, id *string, config DataOciFleetAppsManagementSchedulerDefinitionConfig) DataOciFleetAppsManagementSchedulerDefinition
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig">DataOciFleetAppsManagementSchedulerDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig">DataOciFleetAppsManagementSchedulerDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinition_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinition_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinition_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinition_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciFleetAppsManagementSchedulerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroups">ActionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroupTypes">ActionGroupTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff">ActivityInitiationCutOff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.applicationTypes">ApplicationTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups">CountOfAffectedActionGroups</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedResources">CountOfAffectedResources</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets">CountOfAffectedTargets</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleOperations">LifecycleOperations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.products">Products</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.runBooks">RunBooks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList">DataOciFleetAppsManagementSchedulerDefinitionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeOfNextRun">TimeOfNextRun</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionIdInput">SchedulerDefinitionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroups"></a>

```go
func ActionGroups() DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList</a>

---

##### `ActionGroupTypes`<sup>Required</sup> <a name="ActionGroupTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroupTypes"></a>

```go
func ActionGroupTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ActivityInitiationCutOff`<sup>Required</sup> <a name="ActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff"></a>

```go
func ActivityInitiationCutOff() *f64
```

- *Type:* *f64

---

##### `ApplicationTypes`<sup>Required</sup> <a name="ApplicationTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.applicationTypes"></a>

```go
func ApplicationTypes() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CountOfAffectedActionGroups`<sup>Required</sup> <a name="CountOfAffectedActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups"></a>

```go
func CountOfAffectedActionGroups() *f64
```

- *Type:* *f64

---

##### `CountOfAffectedResources`<sup>Required</sup> <a name="CountOfAffectedResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedResources"></a>

```go
func CountOfAffectedResources() *f64
```

- *Type:* *f64

---

##### `CountOfAffectedTargets`<sup>Required</sup> <a name="CountOfAffectedTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets"></a>

```go
func CountOfAffectedTargets() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleOperations`<sup>Required</sup> <a name="LifecycleOperations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleOperations"></a>

```go
func LifecycleOperations() *[]*string
```

- *Type:* *[]*string

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.products"></a>

```go
func Products() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `RunBooks`<sup>Required</sup> <a name="RunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.runBooks"></a>

```go
func RunBooks() DataOciFleetAppsManagementSchedulerDefinitionRunBooksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedule"></a>

```go
func Schedule() DataOciFleetAppsManagementSchedulerDefinitionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList">DataOciFleetAppsManagementSchedulerDefinitionScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeOfNextRun`<sup>Required</sup> <a name="TimeOfNextRun" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeOfNextRun"></a>

```go
func TimeOfNextRun() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `SchedulerDefinitionIdInput`<sup>Optional</sup> <a name="SchedulerDefinitionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionIdInput"></a>

```go
func SchedulerDefinitionIdInput() *string
```

- *Type:* *string

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionId"></a>

```go
func SchedulerDefinitionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionActionGroups <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

&dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

&dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	SchedulerDefinitionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.schedulerDefinitionId"></a>

```go
SchedulerDefinitionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}.

---

### DataOciFleetAppsManagementSchedulerDefinitionRunBooks <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

&dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

&dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

&dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments {

}
```


### DataOciFleetAppsManagementSchedulerDefinitionSchedule <a name="DataOciFleetAppsManagementSchedulerDefinitionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

&dataocifleetappsmanagementschedulerdefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionActionGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType">ApplicationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation">LifecycleOperation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product">Product</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId">RunbookId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects">Subjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups">DataOciFleetAppsManagementSchedulerDefinitionActionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType"></a>

```go
func ApplicationType() *string
```

- *Type:* *string

---

##### `LifecycleOperation`<sup>Required</sup> <a name="LifecycleOperation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation"></a>

```go
func LifecycleOperation() *string
```

- *Type:* *string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product"></a>

```go
func Product() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId"></a>

```go
func RunbookId() *string
```

- *Type:* *string

---

##### `Subjects`<sup>Required</sup> <a name="Subjects" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects"></a>

```go
func Subjects() *[]*string
```

- *Type:* *[]*string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionActionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups">DataOciFleetAppsManagementSchedulerDefinitionActionGroups</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments">Arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName">StepName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments"></a>

```go
func Arguments() DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a>

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName"></a>

```go
func StepName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionRunBooksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionRunBooksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters">InputParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks">DataOciFleetAppsManagementSchedulerDefinitionRunBooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters"></a>

```go
func InputParameters() DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionRunBooks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks">DataOciFleetAppsManagementSchedulerDefinitionRunBooks</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduleList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get"></a>

```go
func Get(index *f64) DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocifleetappsmanagementschedulerdefinition"

dataocifleetappsmanagementschedulerdefinition.NewDataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration">Duration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate">ExecutionStartdate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences">Recurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule">DataOciFleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration"></a>

```go
func Duration() *string
```

- *Type:* *string

---

##### `ExecutionStartdate`<sup>Required</sup> <a name="ExecutionStartdate" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate"></a>

```go
func ExecutionStartdate() *string
```

- *Type:* *string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId"></a>

```go
func MaintenanceWindowId() *string
```

- *Type:* *string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences"></a>

```go
func Recurrences() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciFleetAppsManagementSchedulerDefinitionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule">DataOciFleetAppsManagementSchedulerDefinitionSchedule</a>

---



