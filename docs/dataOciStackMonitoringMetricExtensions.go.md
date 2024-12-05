# `dataOciStackMonitoringMetricExtensions` Submodule <a name="`dataOciStackMonitoringMetricExtensions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMetricExtensions <a name="DataOciStackMonitoringMetricExtensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions oci_stack_monitoring_metric_extensions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensions(scope Construct, id *string, config DataOciStackMonitoringMetricExtensionsConfig) DataOciStackMonitoringMetricExtensions
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig">DataOciStackMonitoringMetricExtensionsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig">DataOciStackMonitoringMetricExtensionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId">ResetEnabledOnResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType">ResetResourceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabledOnResourceId` <a name="ResetEnabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId"></a>

```go
func ResetEnabledOnResourceId()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName"></a>

```go
func ResetName()
```

##### `ResetResourceType` <a name="ResetResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType"></a>

```go
func ResetResourceType()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState"></a>

```go
func ResetState()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensions_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensions_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensions_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensions_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciStackMonitoringMetricExtensions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciStackMonitoringMetricExtensions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMetricExtensions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection">MetricExtensionCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput">EnabledOnResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId">EnabledOnResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter"></a>

```go
func Filter() DataOciStackMonitoringMetricExtensionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a>

---

##### `MetricExtensionCollection`<sup>Required</sup> <a name="MetricExtensionCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection"></a>

```go
func MetricExtensionCollection() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `EnabledOnResourceIdInput`<sup>Optional</sup> <a name="EnabledOnResourceIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput"></a>

```go
func EnabledOnResourceIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `EnabledOnResourceId`<sup>Required</sup> <a name="EnabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId"></a>

```go
func EnabledOnResourceId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMetricExtensionsConfig <a name="DataOciStackMonitoringMetricExtensionsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	EnabledOnResourceId: *string,
	Filter: interface{},
	Id: *string,
	Name: *string,
	ResourceType: *string,
	State: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId">EnabledOnResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}.

---

##### `EnabledOnResourceId`<sup>Optional</sup> <a name="EnabledOnResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId"></a>

```go
EnabledOnResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#filter DataOciStackMonitoringMetricExtensions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}.

---

### DataOciStackMonitoringMetricExtensionsFilter <a name="DataOciStackMonitoringMetricExtensionsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}.

---

### DataOciStackMonitoringMetricExtensionsMetricExtensionCollection <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails {

}
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

&dataocistackmonitoringmetricextensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMetricExtensionsFilterList <a name="DataOciStackMonitoringMetricExtensionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringMetricExtensionsFilterOutputReference <a name="DataOciStackMonitoringMetricExtensionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression">ComputeExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension">IsDimension</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden">IsHidden</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory">MetricCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeExpression`<sup>Required</sup> <a name="ComputeExpression" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression"></a>

```go
func ComputeExpression() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsDimension`<sup>Required</sup> <a name="IsDimension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension"></a>

```go
func IsDimension() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden"></a>

```go
func IsHidden() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MetricCategory`<sup>Required</sup> <a name="MetricCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory"></a>

```go
func MetricCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod">CollectionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences">CollectionRecurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources">EnabledOnResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount">EnabledOnResourcesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList">MetricList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger">PublishTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties">QueryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri">ResourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionMethod`<sup>Required</sup> <a name="CollectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod"></a>

```go
func CollectionMethod() *string
```

- *Type:* *string

---

##### `CollectionRecurrences`<sup>Required</sup> <a name="CollectionRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences"></a>

```go
func CollectionRecurrences() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnabledOnResources`<sup>Required</sup> <a name="EnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources"></a>

```go
func EnabledOnResources() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a>

---

##### `EnabledOnResourcesCount`<sup>Required</sup> <a name="EnabledOnResourcesCount" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount"></a>

```go
func EnabledOnResourcesCount() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `MetricList`<sup>Required</sup> <a name="MetricList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList"></a>

```go
func MetricList() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublishTrigger`<sup>Required</sup> <a name="PublishTrigger" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger"></a>

```go
func PublishTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `QueryProperties`<sup>Required</sup> <a name="QueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties"></a>

```go
func QueryProperties() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri"></a>

```go
func ResourceUri() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">InParamPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue">InParamValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InParamPosition`<sup>Required</sup> <a name="InParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```go
func InParamPosition() *f64
```

- *Type:* *f64

---

##### `InParamValue`<sup>Required</sup> <a name="InParamValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```go
func InParamValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">OutParamPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType">OutParamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutParamPosition`<sup>Required</sup> <a name="OutParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```go
func OutParamPosition() *f64
```

- *Type:* *f64

---

##### `OutParamType`<sup>Required</sup> <a name="OutParamType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```go
func OutParamType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments">Arguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix">AutoRowPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod">CollectionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric">IdentityMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails">InParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled">IsMetricServiceEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes">JmxAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery">ManagedBeanQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails">OutParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails">ScriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails">SqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType">SqlType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith">StartsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments"></a>

```go
func Arguments() *string
```

- *Type:* *string

---

##### `AutoRowPrefix`<sup>Required</sup> <a name="AutoRowPrefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```go
func AutoRowPrefix() *string
```

- *Type:* *string

---

##### `CollectionMethod`<sup>Required</sup> <a name="CollectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod"></a>

```go
func CollectionMethod() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `IdentityMetric`<sup>Required</sup> <a name="IdentityMetric" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric"></a>

```go
func IdentityMetric() *string
```

- *Type:* *string

---

##### `InParamDetails`<sup>Required</sup> <a name="InParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails"></a>

```go
func InParamDetails() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a>

---

##### `IsMetricServiceEnabled`<sup>Required</sup> <a name="IsMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```go
func IsMetricServiceEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JmxAttributes`<sup>Required</sup> <a name="JmxAttributes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes"></a>

```go
func JmxAttributes() *string
```

- *Type:* *string

---

##### `ManagedBeanQuery`<sup>Required</sup> <a name="ManagedBeanQuery" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```go
func ManagedBeanQuery() *string
```

- *Type:* *string

---

##### `OutParamDetails`<sup>Required</sup> <a name="OutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails"></a>

```go
func OutParamDetails() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a>

---

##### `ScriptDetails`<sup>Required</sup> <a name="ScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails"></a>

```go
func ScriptDetails() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a>

---

##### `SqlDetails`<sup>Required</sup> <a name="SqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails"></a>

```go
func SqlDetails() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a>

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType"></a>

```go
func SqlType() *string
```

- *Type:* *string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith"></a>

```go
func StartsWith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">ScriptFileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ScriptFileName`<sup>Required</sup> <a name="ScriptFileName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```go
func ScriptFileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextensions"

dataocistackmonitoringmetricextensions.NewDataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items"></a>

```go
func Items() DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionsMetricExtensionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a>

---



