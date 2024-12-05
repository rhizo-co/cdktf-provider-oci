# `dataOciMonitoringMetricData` Submodule <a name="`dataOciMonitoringMetricData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringMetricData <a name="DataOciMonitoringMetricData" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data oci_monitoring_metric_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.NewDataOciMonitoringMetricData(scope Construct, id *string, config DataOciMonitoringMetricDataConfig) DataOciMonitoringMetricData
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig">DataOciMonitoringMetricDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig">DataOciMonitoringMetricDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResolution">ResetResolution</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetEndTime` <a name="ResetEndTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetEndTime"></a>

```go
func ResetEndTime()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetId"></a>

```go
func ResetId()
```

##### `ResetResolution` <a name="ResetResolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResolution"></a>

```go
func ResetResolution()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetResourceGroup"></a>

```go
func ResetResourceGroup()
```

##### `ResetStartTime` <a name="ResetStartTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.resetStartTime"></a>

```go
func ResetStartTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMonitoringMetricData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.DataOciMonitoringMetricData_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.DataOciMonitoringMetricData_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.DataOciMonitoringMetricData_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.DataOciMonitoringMetricData_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMonitoringMetricData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMonitoringMetricData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMonitoringMetricData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringMetricData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList">DataOciMonitoringMetricDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.metricData">MetricData</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList">DataOciMonitoringMetricDataMetricDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolutionInput">ResolutionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolution">Resolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filter"></a>

```go
func Filter() DataOciMonitoringMetricDataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList">DataOciMonitoringMetricDataFilterList</a>

---

##### `MetricData`<sup>Required</sup> <a name="MetricData" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.metricData"></a>

```go
func MetricData() DataOciMonitoringMetricDataMetricDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList">DataOciMonitoringMetricDataMetricDataList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `ResolutionInput`<sup>Optional</sup> <a name="ResolutionInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolutionInput"></a>

```go
func ResolutionInput() *string
```

- *Type:* *string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroupInput"></a>

```go
func ResourceGroupInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Resolution`<sup>Required</sup> <a name="Resolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resolution"></a>

```go
func Resolution() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricData.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringMetricDataConfig <a name="DataOciMonitoringMetricDataConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

&dataocimonitoringmetricdata.DataOciMonitoringMetricDataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	Namespace: *string,
	Query: *string,
	CompartmentIdInSubtree: interface{},
	EndTime: *string,
	Filter: interface{},
	Id: *string,
	Resolution: *string,
	ResourceGroup: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id DataOciMonitoringMetricData#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#namespace DataOciMonitoringMetricData#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.query">Query</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#query DataOciMonitoringMetricData#query}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id_in_subtree DataOciMonitoringMetricData#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#end_time DataOciMonitoringMetricData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#id DataOciMonitoringMetricData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resolution">Resolution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resolution DataOciMonitoringMetricData#resolution}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resource_group DataOciMonitoringMetricData#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#start_time DataOciMonitoringMetricData#start_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id DataOciMonitoringMetricData#compartment_id}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#namespace DataOciMonitoringMetricData#namespace}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#query DataOciMonitoringMetricData#query}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#compartment_id_in_subtree DataOciMonitoringMetricData#compartment_id_in_subtree}.

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#end_time DataOciMonitoringMetricData#end_time}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#filter DataOciMonitoringMetricData#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#id DataOciMonitoringMetricData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Resolution`<sup>Optional</sup> <a name="Resolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resolution"></a>

```go
Resolution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resolution DataOciMonitoringMetricData#resolution}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.resourceGroup"></a>

```go
ResourceGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#resource_group DataOciMonitoringMetricData#resource_group}.

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#start_time DataOciMonitoringMetricData#start_time}.

---

### DataOciMonitoringMetricDataFilter <a name="DataOciMonitoringMetricDataFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

&dataocimonitoringmetricdata.DataOciMonitoringMetricDataFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#name DataOciMonitoringMetricData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#values DataOciMonitoringMetricData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#regex DataOciMonitoringMetricData#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#name DataOciMonitoringMetricData#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#values DataOciMonitoringMetricData#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metric_data#regex DataOciMonitoringMetricData#regex}.

---

### DataOciMonitoringMetricDataMetricData <a name="DataOciMonitoringMetricDataMetricData" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

&dataocimonitoringmetricdata.DataOciMonitoringMetricDataMetricData {

}
```


### DataOciMonitoringMetricDataMetricDataAggregatedDatapoints <a name="DataOciMonitoringMetricDataMetricDataAggregatedDatapoints" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

&dataocimonitoringmetricdata.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringMetricDataFilterList <a name="DataOciMonitoringMetricDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.NewDataOciMonitoringMetricDataFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMonitoringMetricDataFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.get"></a>

```go
func Get(index *f64) DataOciMonitoringMetricDataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMonitoringMetricDataFilterOutputReference <a name="DataOciMonitoringMetricDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.NewDataOciMonitoringMetricDataFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMonitoringMetricDataFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList <a name="DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.NewDataOciMonitoringMetricDataMetricDataAggregatedDatapointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.get"></a>

```go
func Get(index *f64) DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference <a name="DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.NewDataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints">DataOciMonitoringMetricDataMetricDataAggregatedDatapoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMonitoringMetricDataMetricDataAggregatedDatapoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapoints">DataOciMonitoringMetricDataMetricDataAggregatedDatapoints</a>

---


### DataOciMonitoringMetricDataMetricDataList <a name="DataOciMonitoringMetricDataMetricDataList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.NewDataOciMonitoringMetricDataMetricDataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMonitoringMetricDataMetricDataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.get"></a>

```go
func Get(index *f64) DataOciMonitoringMetricDataMetricDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMonitoringMetricDataMetricDataOutputReference <a name="DataOciMonitoringMetricDataMetricDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimonitoringmetricdata"

dataocimonitoringmetricdata.NewDataOciMonitoringMetricDataMetricDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMonitoringMetricDataMetricDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.aggregatedDatapoints">AggregatedDatapoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList">DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.dimensions">Dimensions</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resolution">Resolution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData">DataOciMonitoringMetricDataMetricData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AggregatedDatapoints`<sup>Required</sup> <a name="AggregatedDatapoints" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.aggregatedDatapoints"></a>

```go
func AggregatedDatapoints() DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList">DataOciMonitoringMetricDataMetricDataAggregatedDatapointsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.dimensions"></a>

```go
func Dimensions() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `Resolution`<sup>Required</sup> <a name="Resolution" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resolution"></a>

```go
func Resolution() *string
```

- *Type:* *string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.resourceGroup"></a>

```go
func ResourceGroup() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMonitoringMetricDataMetricData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetricData.DataOciMonitoringMetricDataMetricData">DataOciMonitoringMetricDataMetricData</a>

---



