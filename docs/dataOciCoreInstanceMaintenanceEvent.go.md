# `dataOciCoreInstanceMaintenanceEvent` Submodule <a name="`dataOciCoreInstanceMaintenanceEvent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMaintenanceEvent <a name="DataOciCoreInstanceMaintenanceEvent" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event oci_core_instance_maintenance_event}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevent"

dataocicoreinstancemaintenanceevent.NewDataOciCoreInstanceMaintenanceEvent(scope Construct, id *string, config DataOciCoreInstanceMaintenanceEventConfig) DataOciCoreInstanceMaintenanceEvent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig">DataOciCoreInstanceMaintenanceEventConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig">DataOciCoreInstanceMaintenanceEventConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevent"

dataocicoreinstancemaintenanceevent.DataOciCoreInstanceMaintenanceEvent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevent"

dataocicoreinstancemaintenanceevent.DataOciCoreInstanceMaintenanceEvent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevent"

dataocicoreinstancemaintenanceevent.DataOciCoreInstanceMaintenanceEvent_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevent"

dataocicoreinstancemaintenanceevent.DataOciCoreInstanceMaintenanceEvent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreInstanceMaintenanceEvent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreInstanceMaintenanceEvent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMaintenanceEvent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionAction">AlternativeResolutionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionActions">AlternativeResolutionActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canDeleteLocalStorage">CanDeleteLocalStorage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canReschedule">CanReschedule</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.correlationToken">CorrelationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.estimatedDuration">EstimatedDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceAction">InstanceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceCategory">MaintenanceCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceReason">MaintenanceReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.startWindowDuration">StartWindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeHardDueDate">TimeHardDueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeWindowStart">TimeWindowStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput">InstanceMaintenanceEventIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId">InstanceMaintenanceEventId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AlternativeResolutionAction`<sup>Required</sup> <a name="AlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionAction"></a>

```go
func AlternativeResolutionAction() *string
```

- *Type:* *string

---

##### `AlternativeResolutionActions`<sup>Required</sup> <a name="AlternativeResolutionActions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.alternativeResolutionActions"></a>

```go
func AlternativeResolutionActions() *[]*string
```

- *Type:* *[]*string

---

##### `CanDeleteLocalStorage`<sup>Required</sup> <a name="CanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canDeleteLocalStorage"></a>

```go
func CanDeleteLocalStorage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CanReschedule`<sup>Required</sup> <a name="CanReschedule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.canReschedule"></a>

```go
func CanReschedule() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CorrelationToken`<sup>Required</sup> <a name="CorrelationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.correlationToken"></a>

```go
func CorrelationToken() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EstimatedDuration`<sup>Required</sup> <a name="EstimatedDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.estimatedDuration"></a>

```go
func EstimatedDuration() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceAction`<sup>Required</sup> <a name="InstanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceAction"></a>

```go
func InstanceAction() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `MaintenanceCategory`<sup>Required</sup> <a name="MaintenanceCategory" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceCategory"></a>

```go
func MaintenanceCategory() *string
```

- *Type:* *string

---

##### `MaintenanceReason`<sup>Required</sup> <a name="MaintenanceReason" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.maintenanceReason"></a>

```go
func MaintenanceReason() *string
```

- *Type:* *string

---

##### `StartWindowDuration`<sup>Required</sup> <a name="StartWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.startWindowDuration"></a>

```go
func StartWindowDuration() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeHardDueDate`<sup>Required</sup> <a name="TimeHardDueDate" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeHardDueDate"></a>

```go
func TimeHardDueDate() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TimeWindowStart`<sup>Required</sup> <a name="TimeWindowStart" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.timeWindowStart"></a>

```go
func TimeWindowStart() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceEventIdInput`<sup>Optional</sup> <a name="InstanceMaintenanceEventIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventIdInput"></a>

```go
func InstanceMaintenanceEventIdInput() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceEventId`<sup>Required</sup> <a name="InstanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.instanceMaintenanceEventId"></a>

```go
func InstanceMaintenanceEventId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEvent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMaintenanceEventConfig <a name="DataOciCoreInstanceMaintenanceEventConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevent"

&dataocicoreinstancemaintenanceevent.DataOciCoreInstanceMaintenanceEventConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceMaintenanceEventId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId">InstanceMaintenanceEventId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceMaintenanceEventId`<sup>Required</sup> <a name="InstanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvent.DataOciCoreInstanceMaintenanceEventConfig.property.instanceMaintenanceEventId"></a>

```go
InstanceMaintenanceEventId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_event#instance_maintenance_event_id DataOciCoreInstanceMaintenanceEvent#instance_maintenance_event_id}.

---



