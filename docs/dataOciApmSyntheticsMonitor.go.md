# `dataOciApmSyntheticsMonitor` Submodule <a name="`dataOciApmSyntheticsMonitor` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmSyntheticsMonitor <a name="DataOciApmSyntheticsMonitor" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor oci_apm_synthetics_monitor}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitor(scope Construct, id *string, config DataOciApmSyntheticsMonitorConfig) DataOciApmSyntheticsMonitor
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig">DataOciApmSyntheticsMonitorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig">DataOciApmSyntheticsMonitorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitor_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitor_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitor_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitor_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciApmSyntheticsMonitor resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciApmSyntheticsMonitor to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciApmSyntheticsMonitor that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmSyntheticsMonitor to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.availabilityConfiguration">AvailabilityConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList">DataOciApmSyntheticsMonitorAvailabilityConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.batchIntervalInSeconds">BatchIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.configuration">Configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList">DataOciApmSyntheticsMonitorConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isIpv6">IsIpv6</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunNow">IsRunNow</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunOnce">IsRunOnce</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.maintenanceWindowSchedule">MaintenanceWindowSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorType">MonitorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.repeatIntervalInSeconds">RepeatIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptId">ScriptId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptName">ScriptName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptParameters">ScriptParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList">DataOciApmSyntheticsMonitorScriptParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePointCount">VantagePointCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePoints">VantagePoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList">DataOciApmSyntheticsMonitorVantagePointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorIdInput">MonitorIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorId">MonitorId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AvailabilityConfiguration`<sup>Required</sup> <a name="AvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.availabilityConfiguration"></a>

```go
func AvailabilityConfiguration() DataOciApmSyntheticsMonitorAvailabilityConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList">DataOciApmSyntheticsMonitorAvailabilityConfigurationList</a>

---

##### `BatchIntervalInSeconds`<sup>Required</sup> <a name="BatchIntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.batchIntervalInSeconds"></a>

```go
func BatchIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.configuration"></a>

```go
func Configuration() DataOciApmSyntheticsMonitorConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList">DataOciApmSyntheticsMonitorConfigurationList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsIpv6`<sup>Required</sup> <a name="IsIpv6" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isIpv6"></a>

```go
func IsIpv6() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRunNow`<sup>Required</sup> <a name="IsRunNow" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunNow"></a>

```go
func IsRunNow() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRunOnce`<sup>Required</sup> <a name="IsRunOnce" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.isRunOnce"></a>

```go
func IsRunOnce() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `MaintenanceWindowSchedule`<sup>Required</sup> <a name="MaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.maintenanceWindowSchedule"></a>

```go
func MaintenanceWindowSchedule() DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList">DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList</a>

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorType"></a>

```go
func MonitorType() *string
```

- *Type:* *string

---

##### `RepeatIntervalInSeconds`<sup>Required</sup> <a name="RepeatIntervalInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.repeatIntervalInSeconds"></a>

```go
func RepeatIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.schedulingPolicy"></a>

```go
func SchedulingPolicy() *string
```

- *Type:* *string

---

##### `ScriptId`<sup>Required</sup> <a name="ScriptId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptId"></a>

```go
func ScriptId() *string
```

- *Type:* *string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptName"></a>

```go
func ScriptName() *string
```

- *Type:* *string

---

##### `ScriptParameters`<sup>Required</sup> <a name="ScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.scriptParameters"></a>

```go
func ScriptParameters() DataOciApmSyntheticsMonitorScriptParametersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList">DataOciApmSyntheticsMonitorScriptParametersList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeoutInSeconds"></a>

```go
func TimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VantagePointCount`<sup>Required</sup> <a name="VantagePointCount" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePointCount"></a>

```go
func VantagePointCount() *f64
```

- *Type:* *f64

---

##### `VantagePoints`<sup>Required</sup> <a name="VantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.vantagePoints"></a>

```go
func VantagePoints() DataOciApmSyntheticsMonitorVantagePointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList">DataOciApmSyntheticsMonitorVantagePointsList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `MonitorIdInput`<sup>Optional</sup> <a name="MonitorIdInput" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorIdInput"></a>

```go
func MonitorIdInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.monitorId"></a>

```go
func MonitorId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitor.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmSyntheticsMonitorAvailabilityConfiguration <a name="DataOciApmSyntheticsMonitorAvailabilityConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration {

}
```


### DataOciApmSyntheticsMonitorConfig <a name="DataOciApmSyntheticsMonitorConfig" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApmDomainId: *string,
	MonitorId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#apm_domain_id DataOciApmSyntheticsMonitor#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.monitorId">MonitorId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#monitor_id DataOciApmSyntheticsMonitor#monitor_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#apm_domain_id DataOciApmSyntheticsMonitor#apm_domain_id}.

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfig.property.monitorId"></a>

```go
MonitorId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_synthetics_monitor#monitor_id DataOciApmSyntheticsMonitor#monitor_id}.

---

### DataOciApmSyntheticsMonitorConfiguration <a name="DataOciApmSyntheticsMonitorConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfiguration {

}
```


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails {

}
```


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate {

}
```


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey {

}
```


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails {

}
```


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword {

}
```


### DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails {

}
```


### DataOciApmSyntheticsMonitorConfigurationDnsConfiguration <a name="DataOciApmSyntheticsMonitorConfigurationDnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration {

}
```


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails {

}
```


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword {

}
```


### DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration <a name="DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration {

}
```


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails {

}
```


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders {

}
```


### DataOciApmSyntheticsMonitorConfigurationRequestHeaders <a name="DataOciApmSyntheticsMonitorConfigurationRequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders {

}
```


### DataOciApmSyntheticsMonitorConfigurationRequestQueryParams <a name="DataOciApmSyntheticsMonitorConfigurationRequestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams {

}
```


### DataOciApmSyntheticsMonitorConfigurationVerifyTexts <a name="DataOciApmSyntheticsMonitorConfigurationVerifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts {

}
```


### DataOciApmSyntheticsMonitorMaintenanceWindowSchedule <a name="DataOciApmSyntheticsMonitorMaintenanceWindowSchedule" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule {

}
```


### DataOciApmSyntheticsMonitorScriptParameters <a name="DataOciApmSyntheticsMonitorScriptParameters" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorScriptParameters {

}
```


### DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter <a name="DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter {

}
```


### DataOciApmSyntheticsMonitorVantagePoints <a name="DataOciApmSyntheticsMonitorVantagePoints" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

&dataociapmsyntheticsmonitor.DataOciApmSyntheticsMonitorVantagePoints {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmSyntheticsMonitorAvailabilityConfigurationList <a name="DataOciApmSyntheticsMonitorAvailabilityConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorAvailabilityConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorAvailabilityConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval">MaxAllowedFailuresPerInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval">MinAllowedRunsPerInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration">DataOciApmSyntheticsMonitorAvailabilityConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxAllowedFailuresPerInterval`<sup>Required</sup> <a name="MaxAllowedFailuresPerInterval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.maxAllowedFailuresPerInterval"></a>

```go
func MaxAllowedFailuresPerInterval() *f64
```

- *Type:* *f64

---

##### `MinAllowedRunsPerInterval`<sup>Required</sup> <a name="MinAllowedRunsPerInterval" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.minAllowedRunsPerInterval"></a>

```go
func MinAllowedRunsPerInterval() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorAvailabilityConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorAvailabilityConfiguration">DataOciApmSyntheticsMonitorAvailabilityConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificate</a>

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate">ClientCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey">PrivateKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.clientCertificate"></a>

```go
func ClientCertificate() DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsClientCertificateList</a>

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.privateKey"></a>

```go
func PrivateKey() DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName">FileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `FileName`<sup>Required</sup> <a name="FileName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.fileName"></a>

```go
func FileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsPrivateKey</a>

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password">Password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.password"></a>

```go
func Password() DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType">PasswordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```go
func PasswordType() *string
```

- *Type:* *string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```go
func VaultSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet">DatabaseWallet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DatabaseWallet`<sup>Required</sup> <a name="DatabaseWallet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.databaseWallet"></a>

```go
func DatabaseWallet() *string
```

- *Type:* *string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList <a name="DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDnsConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns">IsOverrideDns</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp">OverrideDnsIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorConfigurationDnsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsOverrideDns`<sup>Required</sup> <a name="IsOverrideDns" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.isOverrideDns"></a>

```go
func IsOverrideDns() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `OverrideDnsIp`<sup>Required</sup> <a name="OverrideDnsIp" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.overrideDnsIp"></a>

```go
func OverrideDnsIp() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationDnsConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfiguration">DataOciApmSyntheticsMonitorConfigurationDnsConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password">Password</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.password"></a>

```go
func Password() DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList</a>

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType">PasswordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `PasswordType`<sup>Required</sup> <a name="PasswordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.passwordType"></a>

```go
func PasswordType() *string
```

- *Type:* *string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.vaultSecretId"></a>

```go
func VaultSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPasswordOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsPassword</a>

---


### DataOciApmSyntheticsMonitorConfigurationList <a name="DataOciApmSyntheticsMonitorConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList <a name="DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops">NumberOfHops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode">ProbeMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop">ProbePerHop</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate">TransmissionRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumberOfHops`<sup>Required</sup> <a name="NumberOfHops" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.numberOfHops"></a>

```go
func NumberOfHops() *f64
```

- *Type:* *f64

---

##### `ProbeMode`<sup>Required</sup> <a name="ProbeMode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probeMode"></a>

```go
func ProbeMode() *string
```

- *Type:* *string

---

##### `ProbePerHop`<sup>Required</sup> <a name="ProbePerHop" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.probePerHop"></a>

```go
func ProbePerHop() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `TransmissionRate`<sup>Required</sup> <a name="TransmissionRate" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.transmissionRate"></a>

```go
func TransmissionRate() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration">DataOciApmSyntheticsMonitorConfigurationNetworkConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails">ClientCertificateDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.configType">ConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.connectionString">ConnectionString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails">DatabaseAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType">DatabaseConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole">DatabaseRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseType">DatabaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails">DatabaseWalletDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration">DnsConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes">DownloadSizeLimitInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails">FtpBasicAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol">FtpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType">FtpRequestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode">IsActiveMode</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled">IsCertificateValidationEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled">IsDefaultSnapshotEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried">IsFailureRetried</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive">IsQueryRecursive</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled">IsRedirectionEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.nameServer">NameServer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.recordType">RecordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails">ReqAuthenticationDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme">ReqAuthenticationScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorConfigurationRequestHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod">RequestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody">RequestPostBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams">RequestQueryParams</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes">UploadFileSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes">VerifyResponseCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent">VerifyResponseContent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts">VerifyTexts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorConfigurationVerifyTextsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration">DataOciApmSyntheticsMonitorConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientCertificateDetails`<sup>Required</sup> <a name="ClientCertificateDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.clientCertificateDetails"></a>

```go
func ClientCertificateDetails() DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList">DataOciApmSyntheticsMonitorConfigurationClientCertificateDetailsList</a>

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.configType"></a>

```go
func ConfigType() *string
```

- *Type:* *string

---

##### `ConnectionString`<sup>Required</sup> <a name="ConnectionString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.connectionString"></a>

```go
func ConnectionString() *string
```

- *Type:* *string

---

##### `DatabaseAuthenticationDetails`<sup>Required</sup> <a name="DatabaseAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseAuthenticationDetails"></a>

```go
func DatabaseAuthenticationDetails() DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseAuthenticationDetailsList</a>

---

##### `DatabaseConnectionType`<sup>Required</sup> <a name="DatabaseConnectionType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseConnectionType"></a>

```go
func DatabaseConnectionType() *string
```

- *Type:* *string

---

##### `DatabaseRole`<sup>Required</sup> <a name="DatabaseRole" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseRole"></a>

```go
func DatabaseRole() *string
```

- *Type:* *string

---

##### `DatabaseType`<sup>Required</sup> <a name="DatabaseType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseType"></a>

```go
func DatabaseType() *string
```

- *Type:* *string

---

##### `DatabaseWalletDetails`<sup>Required</sup> <a name="DatabaseWalletDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.databaseWalletDetails"></a>

```go
func DatabaseWalletDetails() DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList">DataOciApmSyntheticsMonitorConfigurationDatabaseWalletDetailsList</a>

---

##### `DnsConfiguration`<sup>Required</sup> <a name="DnsConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.dnsConfiguration"></a>

```go
func DnsConfiguration() DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList">DataOciApmSyntheticsMonitorConfigurationDnsConfigurationList</a>

---

##### `DownloadSizeLimitInBytes`<sup>Required</sup> <a name="DownloadSizeLimitInBytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.downloadSizeLimitInBytes"></a>

```go
func DownloadSizeLimitInBytes() *f64
```

- *Type:* *f64

---

##### `FtpBasicAuthenticationDetails`<sup>Required</sup> <a name="FtpBasicAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpBasicAuthenticationDetails"></a>

```go
func FtpBasicAuthenticationDetails() DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationFtpBasicAuthenticationDetailsList</a>

---

##### `FtpProtocol`<sup>Required</sup> <a name="FtpProtocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpProtocol"></a>

```go
func FtpProtocol() *string
```

- *Type:* *string

---

##### `FtpRequestType`<sup>Required</sup> <a name="FtpRequestType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.ftpRequestType"></a>

```go
func FtpRequestType() *string
```

- *Type:* *string

---

##### `IsActiveMode`<sup>Required</sup> <a name="IsActiveMode" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isActiveMode"></a>

```go
func IsActiveMode() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsCertificateValidationEnabled`<sup>Required</sup> <a name="IsCertificateValidationEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isCertificateValidationEnabled"></a>

```go
func IsCertificateValidationEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDefaultSnapshotEnabled`<sup>Required</sup> <a name="IsDefaultSnapshotEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isDefaultSnapshotEnabled"></a>

```go
func IsDefaultSnapshotEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsFailureRetried`<sup>Required</sup> <a name="IsFailureRetried" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isFailureRetried"></a>

```go
func IsFailureRetried() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsQueryRecursive`<sup>Required</sup> <a name="IsQueryRecursive" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isQueryRecursive"></a>

```go
func IsQueryRecursive() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRedirectionEnabled`<sup>Required</sup> <a name="IsRedirectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.isRedirectionEnabled"></a>

```go
func IsRedirectionEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NameServer`<sup>Required</sup> <a name="NameServer" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.nameServer"></a>

```go
func NameServer() *string
```

- *Type:* *string

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList">DataOciApmSyntheticsMonitorConfigurationNetworkConfigurationList</a>

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `RecordType`<sup>Required</sup> <a name="RecordType" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.recordType"></a>

```go
func RecordType() *string
```

- *Type:* *string

---

##### `ReqAuthenticationDetails`<sup>Required</sup> <a name="ReqAuthenticationDetails" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationDetails"></a>

```go
func ReqAuthenticationDetails() DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList</a>

---

##### `ReqAuthenticationScheme`<sup>Required</sup> <a name="ReqAuthenticationScheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.reqAuthenticationScheme"></a>

```go
func ReqAuthenticationScheme() *string
```

- *Type:* *string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestHeaders"></a>

```go
func RequestHeaders() DataOciApmSyntheticsMonitorConfigurationRequestHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList">DataOciApmSyntheticsMonitorConfigurationRequestHeadersList</a>

---

##### `RequestMethod`<sup>Required</sup> <a name="RequestMethod" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestMethod"></a>

```go
func RequestMethod() *string
```

- *Type:* *string

---

##### `RequestPostBody`<sup>Required</sup> <a name="RequestPostBody" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestPostBody"></a>

```go
func RequestPostBody() *string
```

- *Type:* *string

---

##### `RequestQueryParams`<sup>Required</sup> <a name="RequestQueryParams" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.requestQueryParams"></a>

```go
func RequestQueryParams() DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList">DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList</a>

---

##### `UploadFileSizeInBytes`<sup>Required</sup> <a name="UploadFileSizeInBytes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.uploadFileSizeInBytes"></a>

```go
func UploadFileSizeInBytes() *f64
```

- *Type:* *f64

---

##### `VerifyResponseCodes`<sup>Required</sup> <a name="VerifyResponseCodes" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseCodes"></a>

```go
func VerifyResponseCodes() *[]*string
```

- *Type:* *[]*string

---

##### `VerifyResponseContent`<sup>Required</sup> <a name="VerifyResponseContent" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyResponseContent"></a>

```go
func VerifyResponseContent() *string
```

- *Type:* *string

---

##### `VerifyTexts`<sup>Required</sup> <a name="VerifyTexts" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.verifyTexts"></a>

```go
func VerifyTexts() DataOciApmSyntheticsMonitorConfigurationVerifyTextsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList">DataOciApmSyntheticsMonitorConfigurationVerifyTextsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfiguration">DataOciApmSyntheticsMonitorConfiguration</a>

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeaders</a>

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders">AuthHeaders</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod">AuthRequestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody">AuthRequestPostBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken">AuthToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName">AuthUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword">AuthUserPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme">OauthScheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthHeaders`<sup>Required</sup> <a name="AuthHeaders" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authHeaders"></a>

```go
func AuthHeaders() DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsAuthHeadersList</a>

---

##### `AuthRequestMethod`<sup>Required</sup> <a name="AuthRequestMethod" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestMethod"></a>

```go
func AuthRequestMethod() *string
```

- *Type:* *string

---

##### `AuthRequestPostBody`<sup>Required</sup> <a name="AuthRequestPostBody" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authRequestPostBody"></a>

```go
func AuthRequestPostBody() *string
```

- *Type:* *string

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authToken"></a>

```go
func AuthToken() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `AuthUserName`<sup>Required</sup> <a name="AuthUserName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserName"></a>

```go
func AuthUserName() *string
```

- *Type:* *string

---

##### `AuthUserPassword`<sup>Required</sup> <a name="AuthUserPassword" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.authUserPassword"></a>

```go
func AuthUserPassword() *string
```

- *Type:* *string

---

##### `OauthScheme`<sup>Required</sup> <a name="OauthScheme" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.oauthScheme"></a>

```go
func OauthScheme() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails">DataOciApmSyntheticsMonitorConfigurationReqAuthenticationDetails</a>

---


### DataOciApmSyntheticsMonitorConfigurationRequestHeadersList <a name="DataOciApmSyntheticsMonitorConfigurationRequestHeadersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationRequestHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationRequestHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders">DataOciApmSyntheticsMonitorConfigurationRequestHeaders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationRequestHeaders
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestHeaders">DataOciApmSyntheticsMonitorConfigurationRequestHeaders</a>

---


### DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList <a name="DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName">ParamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue">ParamValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorConfigurationRequestQueryParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramName"></a>

```go
func ParamName() *string
```

- *Type:* *string

---

##### `ParamValue`<sup>Required</sup> <a name="ParamValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.paramValue"></a>

```go
func ParamValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParamsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationRequestQueryParams
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationRequestQueryParams">DataOciApmSyntheticsMonitorConfigurationRequestQueryParams</a>

---


### DataOciApmSyntheticsMonitorConfigurationVerifyTextsList <a name="DataOciApmSyntheticsMonitorConfigurationVerifyTextsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationVerifyTextsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorConfigurationVerifyTextsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference <a name="DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts">DataOciApmSyntheticsMonitorConfigurationVerifyTexts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTextsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorConfigurationVerifyTexts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorConfigurationVerifyTexts">DataOciApmSyntheticsMonitorConfigurationVerifyTexts</a>

---


### DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList <a name="DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorMaintenanceWindowScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference <a name="DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorMaintenanceWindowSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorMaintenanceWindowSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorMaintenanceWindowSchedule">DataOciApmSyntheticsMonitorMaintenanceWindowSchedule</a>

---


### DataOciApmSyntheticsMonitorScriptParametersList <a name="DataOciApmSyntheticsMonitorScriptParametersList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorScriptParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorScriptParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorScriptParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList <a name="DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference <a name="DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName">ParamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue">ParamValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramName"></a>

```go
func ParamName() *string
```

- *Type:* *string

---

##### `ParamValue`<sup>Required</sup> <a name="ParamValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.paramValue"></a>

```go
func ParamValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameter</a>

---


### DataOciApmSyntheticsMonitorScriptParametersOutputReference <a name="DataOciApmSyntheticsMonitorScriptParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorScriptParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorScriptParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten">IsOverwritten</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret">IsSecret</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter">MonitorScriptParameter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramName">ParamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue">ParamValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters">DataOciApmSyntheticsMonitorScriptParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsOverwritten`<sup>Required</sup> <a name="IsOverwritten" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isOverwritten"></a>

```go
func IsOverwritten() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSecret`<sup>Required</sup> <a name="IsSecret" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.isSecret"></a>

```go
func IsSecret() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MonitorScriptParameter`<sup>Required</sup> <a name="MonitorScriptParameter" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.monitorScriptParameter"></a>

```go
func MonitorScriptParameter() DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList">DataOciApmSyntheticsMonitorScriptParametersMonitorScriptParameterList</a>

---

##### `ParamName`<sup>Required</sup> <a name="ParamName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramName"></a>

```go
func ParamName() *string
```

- *Type:* *string

---

##### `ParamValue`<sup>Required</sup> <a name="ParamValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.paramValue"></a>

```go
func ParamValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorScriptParameters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorScriptParameters">DataOciApmSyntheticsMonitorScriptParameters</a>

---


### DataOciApmSyntheticsMonitorVantagePointsList <a name="DataOciApmSyntheticsMonitorVantagePointsList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorVantagePointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciApmSyntheticsMonitorVantagePointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.get"></a>

```go
func Get(index *f64) DataOciApmSyntheticsMonitorVantagePointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciApmSyntheticsMonitorVantagePointsOutputReference <a name="DataOciApmSyntheticsMonitorVantagePointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociapmsyntheticsmonitor"

dataociapmsyntheticsmonitor.NewDataOciApmSyntheticsMonitorVantagePointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciApmSyntheticsMonitorVantagePointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.workerList">WorkerList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints">DataOciApmSyntheticsMonitorVantagePoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `WorkerList`<sup>Required</sup> <a name="WorkerList" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.workerList"></a>

```go
func WorkerList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciApmSyntheticsMonitorVantagePoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmSyntheticsMonitor.DataOciApmSyntheticsMonitorVantagePoints">DataOciApmSyntheticsMonitorVantagePoints</a>

---



