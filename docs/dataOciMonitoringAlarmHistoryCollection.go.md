# `dataOciMonitoringAlarmHistoryCollection` Submodule <a name="`dataOciMonitoringAlarmHistoryCollection` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmHistoryCollection <a name="DataOciMonitoringAlarmHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection oci_monitoring_alarm_history_collection}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

dataocimonitoringalarmhistorycollection.NewDataOciMonitoringAlarmHistoryCollection(scope Construct, id *string, config DataOciMonitoringAlarmHistoryCollectionConfig) DataOciMonitoringAlarmHistoryCollection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig">DataOciMonitoringAlarmHistoryCollectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig">DataOciMonitoringAlarmHistoryCollectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetAlarmHistorytype">ResetAlarmHistorytype</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampGreaterThanOrEqualTo">ResetTimestampGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampLessThan">ResetTimestampLessThan</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAlarmHistorytype` <a name="ResetAlarmHistorytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetAlarmHistorytype"></a>

```go
func ResetAlarmHistorytype()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetId"></a>

```go
func ResetId()
```

##### `ResetTimestampGreaterThanOrEqualTo` <a name="ResetTimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampGreaterThanOrEqualTo"></a>

```go
func ResetTimestampGreaterThanOrEqualTo()
```

##### `ResetTimestampLessThan` <a name="ResetTimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.resetTimestampLessThan"></a>

```go
func ResetTimestampLessThan()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmHistoryCollection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

dataocimonitoringalarmhistorycollection.DataOciMonitoringAlarmHistoryCollection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

dataocimonitoringalarmhistorycollection.DataOciMonitoringAlarmHistoryCollection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

dataocimonitoringalarmhistorycollection.DataOciMonitoringAlarmHistoryCollection_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

dataocimonitoringalarmhistorycollection.DataOciMonitoringAlarmHistoryCollection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMonitoringAlarmHistoryCollection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMonitoringAlarmHistoryCollection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMonitoringAlarmHistoryCollection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmHistoryCollection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.entries">Entries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList">DataOciMonitoringAlarmHistoryCollectionEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytypeInput">AlarmHistorytypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmIdInput">AlarmIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualToInput">TimestampGreaterThanOrEqualToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThanInput">TimestampLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytype">AlarmHistorytype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmId">AlarmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualTo">TimestampGreaterThanOrEqualTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThan">TimestampLessThan</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.entries"></a>

```go
func Entries() DataOciMonitoringAlarmHistoryCollectionEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList">DataOciMonitoringAlarmHistoryCollectionEntriesList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `AlarmHistorytypeInput`<sup>Optional</sup> <a name="AlarmHistorytypeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytypeInput"></a>

```go
func AlarmHistorytypeInput() *string
```

- *Type:* *string

---

##### `AlarmIdInput`<sup>Optional</sup> <a name="AlarmIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmIdInput"></a>

```go
func AlarmIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TimestampGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="TimestampGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualToInput"></a>

```go
func TimestampGreaterThanOrEqualToInput() *string
```

- *Type:* *string

---

##### `TimestampLessThanInput`<sup>Optional</sup> <a name="TimestampLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThanInput"></a>

```go
func TimestampLessThanInput() *string
```

- *Type:* *string

---

##### `AlarmHistorytype`<sup>Required</sup> <a name="AlarmHistorytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmHistorytype"></a>

```go
func AlarmHistorytype() *string
```

- *Type:* *string

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.alarmId"></a>

```go
func AlarmId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TimestampGreaterThanOrEqualTo`<sup>Required</sup> <a name="TimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampGreaterThanOrEqualTo"></a>

```go
func TimestampGreaterThanOrEqualTo() *string
```

- *Type:* *string

---

##### `TimestampLessThan`<sup>Required</sup> <a name="TimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.timestampLessThan"></a>

```go
func TimestampLessThan() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmHistoryCollectionConfig <a name="DataOciMonitoringAlarmHistoryCollectionConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

&dataocimonitoringalarmhistorycollection.DataOciMonitoringAlarmHistoryCollectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AlarmId: *string,
	AlarmHistorytype: *string,
	Id: *string,
	TimestampGreaterThanOrEqualTo: *string,
	TimestampLessThan: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmId">AlarmId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmHistorytype">AlarmHistorytype</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampGreaterThanOrEqualTo">TimestampGreaterThanOrEqualTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampLessThan">TimestampLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmId"></a>

```go
AlarmId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_id DataOciMonitoringAlarmHistoryCollection#alarm_id}.

---

##### `AlarmHistorytype`<sup>Optional</sup> <a name="AlarmHistorytype" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.alarmHistorytype"></a>

```go
AlarmHistorytype *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#alarm_historytype DataOciMonitoringAlarmHistoryCollection#alarm_historytype}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#id DataOciMonitoringAlarmHistoryCollection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TimestampGreaterThanOrEqualTo`<sup>Optional</sup> <a name="TimestampGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampGreaterThanOrEqualTo"></a>

```go
TimestampGreaterThanOrEqualTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_greater_than_or_equal_to DataOciMonitoringAlarmHistoryCollection#timestamp_greater_than_or_equal_to}.

---

##### `TimestampLessThan`<sup>Optional</sup> <a name="TimestampLessThan" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionConfig.property.timestampLessThan"></a>

```go
TimestampLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_history_collection#timestamp_less_than DataOciMonitoringAlarmHistoryCollection#timestamp_less_than}.

---

### DataOciMonitoringAlarmHistoryCollectionEntries <a name="DataOciMonitoringAlarmHistoryCollectionEntries" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

&dataocimonitoringalarmhistorycollection.DataOciMonitoringAlarmHistoryCollectionEntries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmHistoryCollectionEntriesList <a name="DataOciMonitoringAlarmHistoryCollectionEntriesList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

dataocimonitoringalarmhistorycollection.NewDataOciMonitoringAlarmHistoryCollectionEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMonitoringAlarmHistoryCollectionEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get"></a>

```go
func Get(index *f64) DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference <a name="DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmhistorycollection"

dataocimonitoringalarmhistorycollection.NewDataOciMonitoringAlarmHistoryCollectionEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.alarmSummary">AlarmSummary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.summary">Summary</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestampTriggered">TimestampTriggered</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries">DataOciMonitoringAlarmHistoryCollectionEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmSummary`<sup>Required</sup> <a name="AlarmSummary" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.alarmSummary"></a>

```go
func AlarmSummary() *string
```

- *Type:* *string

---

##### `Summary`<sup>Required</sup> <a name="Summary" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.summary"></a>

```go
func Summary() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `TimestampTriggered`<sup>Required</sup> <a name="TimestampTriggered" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.timestampTriggered"></a>

```go
func TimestampTriggered() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMonitoringAlarmHistoryCollectionEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmHistoryCollection.DataOciMonitoringAlarmHistoryCollectionEntries">DataOciMonitoringAlarmHistoryCollectionEntries</a>

---



