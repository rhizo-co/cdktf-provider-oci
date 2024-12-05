# `dataOciCoreInstanceMaintenanceEvents` Submodule <a name="`dataOciCoreInstanceMaintenanceEvents` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstanceMaintenanceEvents <a name="DataOciCoreInstanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events oci_core_instance_maintenance_events}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.NewDataOciCoreInstanceMaintenanceEvents(scope Construct, id *string, config DataOciCoreInstanceMaintenanceEventsConfig) DataOciCoreInstanceMaintenanceEvents
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig">DataOciCoreInstanceMaintenanceEventsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig">DataOciCoreInstanceMaintenanceEventsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetCorrelationToken">ResetCorrelationToken</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceAction">ResetInstanceAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceId">ResetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartGreaterThanOrEqualTo">ResetTimeWindowStartGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartLessThanOrEqualTo">ResetTimeWindowStartLessThanOrEqualTo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCorrelationToken` <a name="ResetCorrelationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetCorrelationToken"></a>

```go
func ResetCorrelationToken()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceAction` <a name="ResetInstanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceAction"></a>

```go
func ResetInstanceAction()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetInstanceId"></a>

```go
func ResetInstanceId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeWindowStartGreaterThanOrEqualTo` <a name="ResetTimeWindowStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartGreaterThanOrEqualTo"></a>

```go
func ResetTimeWindowStartGreaterThanOrEqualTo()
```

##### `ResetTimeWindowStartLessThanOrEqualTo` <a name="ResetTimeWindowStartLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.resetTimeWindowStartLessThanOrEqualTo"></a>

```go
func ResetTimeWindowStartLessThanOrEqualTo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvents resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.DataOciCoreInstanceMaintenanceEvents_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.DataOciCoreInstanceMaintenanceEvents_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.DataOciCoreInstanceMaintenanceEvents_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.DataOciCoreInstanceMaintenanceEvents_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreInstanceMaintenanceEvents resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreInstanceMaintenanceEvents to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreInstanceMaintenanceEvents that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstanceMaintenanceEvents to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList">DataOciCoreInstanceMaintenanceEventsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceMaintenanceEvents">InstanceMaintenanceEvents</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationTokenInput">CorrelationTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceActionInput">InstanceActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualToInput">TimeWindowStartGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualToInput">TimeWindowStartLessThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationToken">CorrelationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceAction">InstanceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualTo">TimeWindowStartGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualTo">TimeWindowStartLessThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filter"></a>

```go
func Filter() DataOciCoreInstanceMaintenanceEventsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList">DataOciCoreInstanceMaintenanceEventsFilterList</a>

---

##### `InstanceMaintenanceEvents`<sup>Required</sup> <a name="InstanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceMaintenanceEvents"></a>

```go
func InstanceMaintenanceEvents() DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CorrelationTokenInput`<sup>Optional</sup> <a name="CorrelationTokenInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationTokenInput"></a>

```go
func CorrelationTokenInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceActionInput`<sup>Optional</sup> <a name="InstanceActionInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceActionInput"></a>

```go
func InstanceActionInput() *string
```

- *Type:* *string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeWindowStartGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimeWindowStartGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualToInput"></a>

```go
func TimeWindowStartGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimeWindowStartLessThanOrEqualToInput`<sup>Optional</sup> <a name="TimeWindowStartLessThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualToInput"></a>

```go
func TimeWindowStartLessThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CorrelationToken`<sup>Required</sup> <a name="CorrelationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.correlationToken"></a>

```go
func CorrelationToken() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceAction`<sup>Required</sup> <a name="InstanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceAction"></a>

```go
func InstanceAction() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeWindowStartGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimeWindowStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartGreaterThanOrEqualTo"></a>

```go
func TimeWindowStartGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimeWindowStartLessThanOrEqualTo`<sup>Required</sup> <a name="TimeWindowStartLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.timeWindowStartLessThanOrEqualTo"></a>

```go
func TimeWindowStartLessThanOrEqualTo() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEvents.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstanceMaintenanceEventsConfig <a name="DataOciCoreInstanceMaintenanceEventsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

&dataocicoreinstancemaintenanceevents.DataOciCoreInstanceMaintenanceEventsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CorrelationToken: *string,
	Filter: interface{},
	Id: *string,
	InstanceAction: *string,
	InstanceId: *string,
	State: *string,
	TimeWindowStartGreaterThanOrEqualTo: *string,
	TimeWindowStartLessThanOrEqualTo: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.correlationToken">CorrelationToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceAction">InstanceAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceId">InstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartGreaterThanOrEqualTo">TimeWindowStartGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartLessThanOrEqualTo">TimeWindowStartLessThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#compartment_id DataOciCoreInstanceMaintenanceEvents#compartment_id}.

---

##### `CorrelationToken`<sup>Optional</sup> <a name="CorrelationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.correlationToken"></a>

```go
CorrelationToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#correlation_token DataOciCoreInstanceMaintenanceEvents#correlation_token}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#filter DataOciCoreInstanceMaintenanceEvents#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#id DataOciCoreInstanceMaintenanceEvents#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceAction`<sup>Optional</sup> <a name="InstanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceAction"></a>

```go
InstanceAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_action DataOciCoreInstanceMaintenanceEvents#instance_action}.

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#instance_id DataOciCoreInstanceMaintenanceEvents#instance_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#state DataOciCoreInstanceMaintenanceEvents#state}.

---

##### `TimeWindowStartGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimeWindowStartGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartGreaterThanOrEqualTo"></a>

```go
TimeWindowStartGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_greater_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_greater_than_or_equal_to}.

---

##### `TimeWindowStartLessThanOrEqualTo`<sup>Optional</sup> <a name="TimeWindowStartLessThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsConfig.property.timeWindowStartLessThanOrEqualTo"></a>

```go
TimeWindowStartLessThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#time_window_start_less_than_or_equal_to DataOciCoreInstanceMaintenanceEvents#time_window_start_less_than_or_equal_to}.

---

### DataOciCoreInstanceMaintenanceEventsFilter <a name="DataOciCoreInstanceMaintenanceEventsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

&dataocicoreinstancemaintenanceevents.DataOciCoreInstanceMaintenanceEventsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#name DataOciCoreInstanceMaintenanceEvents#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#values DataOciCoreInstanceMaintenanceEvents#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#regex DataOciCoreInstanceMaintenanceEvents#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#name DataOciCoreInstanceMaintenanceEvents#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#values DataOciCoreInstanceMaintenanceEvents#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_maintenance_events#regex DataOciCoreInstanceMaintenanceEvents#regex}.

---

### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

&dataocicoreinstancemaintenanceevents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreInstanceMaintenanceEventsFilterList <a name="DataOciCoreInstanceMaintenanceEventsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.NewDataOciCoreInstanceMaintenanceEventsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstanceMaintenanceEventsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get"></a>

```go
func Get(index *f64) DataOciCoreInstanceMaintenanceEventsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreInstanceMaintenanceEventsFilterOutputReference <a name="DataOciCoreInstanceMaintenanceEventsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.NewDataOciCoreInstanceMaintenanceEventsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstanceMaintenanceEventsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.NewDataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get"></a>

```go
func Get(index *f64) DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference <a name="DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancemaintenanceevents"

dataocicoreinstancemaintenanceevents.NewDataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.additionalDetails">AdditionalDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionAction">AlternativeResolutionAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionActions">AlternativeResolutionActions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canDeleteLocalStorage">CanDeleteLocalStorage</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canReschedule">CanReschedule</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.correlationToken">CorrelationToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.estimatedDuration">EstimatedDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceAction">InstanceAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceMaintenanceEventId">InstanceMaintenanceEventId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceCategory">MaintenanceCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceReason">MaintenanceReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.startWindowDuration">StartWindowDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeHardDueDate">TimeHardDueDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeWindowStart">TimeWindowStart</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalDetails`<sup>Required</sup> <a name="AdditionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.additionalDetails"></a>

```go
func AdditionalDetails() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `AlternativeResolutionAction`<sup>Required</sup> <a name="AlternativeResolutionAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionAction"></a>

```go
func AlternativeResolutionAction() *string
```

- *Type:* *string

---

##### `AlternativeResolutionActions`<sup>Required</sup> <a name="AlternativeResolutionActions" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.alternativeResolutionActions"></a>

```go
func AlternativeResolutionActions() *[]*string
```

- *Type:* *[]*string

---

##### `CanDeleteLocalStorage`<sup>Required</sup> <a name="CanDeleteLocalStorage" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canDeleteLocalStorage"></a>

```go
func CanDeleteLocalStorage() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CanReschedule`<sup>Required</sup> <a name="CanReschedule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.canReschedule"></a>

```go
func CanReschedule() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CorrelationToken`<sup>Required</sup> <a name="CorrelationToken" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.correlationToken"></a>

```go
func CorrelationToken() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EstimatedDuration`<sup>Required</sup> <a name="EstimatedDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.estimatedDuration"></a>

```go
func EstimatedDuration() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceAction`<sup>Required</sup> <a name="InstanceAction" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceAction"></a>

```go
func InstanceAction() *string
```

- *Type:* *string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InstanceMaintenanceEventId`<sup>Required</sup> <a name="InstanceMaintenanceEventId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.instanceMaintenanceEventId"></a>

```go
func InstanceMaintenanceEventId() *string
```

- *Type:* *string

---

##### `MaintenanceCategory`<sup>Required</sup> <a name="MaintenanceCategory" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceCategory"></a>

```go
func MaintenanceCategory() *string
```

- *Type:* *string

---

##### `MaintenanceReason`<sup>Required</sup> <a name="MaintenanceReason" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.maintenanceReason"></a>

```go
func MaintenanceReason() *string
```

- *Type:* *string

---

##### `StartWindowDuration`<sup>Required</sup> <a name="StartWindowDuration" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.startWindowDuration"></a>

```go
func StartWindowDuration() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeHardDueDate`<sup>Required</sup> <a name="TimeHardDueDate" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeHardDueDate"></a>

```go
func TimeHardDueDate() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TimeWindowStart`<sup>Required</sup> <a name="TimeWindowStart" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.timeWindowStart"></a>

```go
func TimeWindowStart() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEventsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstanceMaintenanceEvents.DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents">DataOciCoreInstanceMaintenanceEventsInstanceMaintenanceEvents</a>

---



