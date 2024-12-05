# `dataOciMonitoringAlarmSuppression` Submodule <a name="`dataOciMonitoringAlarmSuppression` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringAlarmSuppressionA <a name="DataOciMonitoringAlarmSuppressionA" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppression oci_monitoring_alarm_suppression}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.NewDataOciMonitoringAlarmSuppressionA(scope Construct, id *string, config DataOciMonitoringAlarmSuppressionAConfig) DataOciMonitoringAlarmSuppressionA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig">DataOciMonitoringAlarmSuppressionAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig">DataOciMonitoringAlarmSuppressionAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.DataOciMonitoringAlarmSuppressionA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.DataOciMonitoringAlarmSuppressionA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.DataOciMonitoringAlarmSuppressionA_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.DataOciMonitoringAlarmSuppressionA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMonitoringAlarmSuppressionA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMonitoringAlarmSuppressionA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMonitoringAlarmSuppressionA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppression#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringAlarmSuppressionA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.alarmSuppressionTarget">AlarmSuppressionTarget</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.dimensions">Dimensions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.level">Level</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.suppressionConditions">SuppressionConditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList">DataOciMonitoringAlarmSuppressionSuppressionConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeSuppressFrom">TimeSuppressFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeSuppressUntil">TimeSuppressUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.alarmSuppressionIdInput">AlarmSuppressionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.alarmSuppressionId">AlarmSuppressionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AlarmSuppressionTarget`<sup>Required</sup> <a name="AlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.alarmSuppressionTarget"></a>

```go
func AlarmSuppressionTarget() DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList">DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.dimensions"></a>

```go
func Dimensions() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Level`<sup>Required</sup> <a name="Level" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.level"></a>

```go
func Level() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SuppressionConditions`<sup>Required</sup> <a name="SuppressionConditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.suppressionConditions"></a>

```go
func SuppressionConditions() DataOciMonitoringAlarmSuppressionSuppressionConditionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList">DataOciMonitoringAlarmSuppressionSuppressionConditionsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeSuppressFrom`<sup>Required</sup> <a name="TimeSuppressFrom" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeSuppressFrom"></a>

```go
func TimeSuppressFrom() *string
```

- *Type:* *string

---

##### `TimeSuppressUntil`<sup>Required</sup> <a name="TimeSuppressUntil" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeSuppressUntil"></a>

```go
func TimeSuppressUntil() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AlarmSuppressionIdInput`<sup>Optional</sup> <a name="AlarmSuppressionIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.alarmSuppressionIdInput"></a>

```go
func AlarmSuppressionIdInput() *string
```

- *Type:* *string

---

##### `AlarmSuppressionId`<sup>Required</sup> <a name="AlarmSuppressionId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.alarmSuppressionId"></a>

```go
func AlarmSuppressionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringAlarmSuppressionAConfig <a name="DataOciMonitoringAlarmSuppressionAConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

&dataocimonitoringalarmsuppression.DataOciMonitoringAlarmSuppressionAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AlarmSuppressionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.alarmSuppressionId">AlarmSuppressionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppression#alarm_suppression_id DataOciMonitoringAlarmSuppressionA#alarm_suppression_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AlarmSuppressionId`<sup>Required</sup> <a name="AlarmSuppressionId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAConfig.property.alarmSuppressionId"></a>

```go
AlarmSuppressionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_alarm_suppression#alarm_suppression_id DataOciMonitoringAlarmSuppressionA#alarm_suppression_id}.

---

### DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget <a name="DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

&dataocimonitoringalarmsuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget {

}
```


### DataOciMonitoringAlarmSuppressionSuppressionConditions <a name="DataOciMonitoringAlarmSuppressionSuppressionConditions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

&dataocimonitoringalarmsuppression.DataOciMonitoringAlarmSuppressionSuppressionConditions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList <a name="DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.NewDataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.get"></a>

```go
func Get(index *f64) DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference <a name="DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.NewDataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId">AlarmId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlarmId`<sup>Required</sup> <a name="AlarmId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.alarmId"></a>

```go
func AlarmId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget">DataOciMonitoringAlarmSuppressionAlarmSuppressionTarget</a>

---


### DataOciMonitoringAlarmSuppressionSuppressionConditionsList <a name="DataOciMonitoringAlarmSuppressionSuppressionConditionsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.NewDataOciMonitoringAlarmSuppressionSuppressionConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMonitoringAlarmSuppressionSuppressionConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.get"></a>

```go
func Get(index *f64) DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference <a name="DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringalarmsuppression"

dataocimonitoringalarmsuppression.NewDataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType">ConditionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration">SuppressionDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence">SuppressionRecurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditions">DataOciMonitoringAlarmSuppressionSuppressionConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionType`<sup>Required</sup> <a name="ConditionType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.conditionType"></a>

```go
func ConditionType() *string
```

- *Type:* *string

---

##### `SuppressionDuration`<sup>Required</sup> <a name="SuppressionDuration" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionDuration"></a>

```go
func SuppressionDuration() *string
```

- *Type:* *string

---

##### `SuppressionRecurrence`<sup>Required</sup> <a name="SuppressionRecurrence" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.suppressionRecurrence"></a>

```go
func SuppressionRecurrence() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMonitoringAlarmSuppressionSuppressionConditions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringAlarmSuppression.DataOciMonitoringAlarmSuppressionSuppressionConditions">DataOciMonitoringAlarmSuppressionSuppressionConditions</a>

---



