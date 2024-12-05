# `dataOciStackMonitoringMetricExtension` Submodule <a name="`dataOciStackMonitoringMetricExtension` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMetricExtension <a name="DataOciStackMonitoringMetricExtension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtension(scope Construct, id *string, config DataOciStackMonitoringMetricExtensionConfig) DataOciStackMonitoringMetricExtension
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig">DataOciStackMonitoringMetricExtensionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig">DataOciStackMonitoringMetricExtensionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtension_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtension_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtension_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtension_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciStackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciStackMonitoringMetricExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciStackMonitoringMetricExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMetricExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionMethod">CollectionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionRecurrences">CollectionRecurrences</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResources">EnabledOnResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResourcesCount">EnabledOnResourcesCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lastUpdatedBy">LastUpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricList">MetricList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList">DataOciStackMonitoringMetricExtensionMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.publishTrigger">PublishTrigger</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.queryProperties">QueryProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList">DataOciStackMonitoringMetricExtensionQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceUri">ResourceUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionIdInput">MetricExtensionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionId">MetricExtensionId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CollectionMethod`<sup>Required</sup> <a name="CollectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionMethod"></a>

```go
func CollectionMethod() *string
```

- *Type:* *string

---

##### `CollectionRecurrences`<sup>Required</sup> <a name="CollectionRecurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.collectionRecurrences"></a>

```go
func CollectionRecurrences() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EnabledOnResources`<sup>Required</sup> <a name="EnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResources"></a>

```go
func EnabledOnResources() DataOciStackMonitoringMetricExtensionEnabledOnResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionEnabledOnResourcesList</a>

---

##### `EnabledOnResourcesCount`<sup>Required</sup> <a name="EnabledOnResourcesCount" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.enabledOnResourcesCount"></a>

```go
func EnabledOnResourcesCount() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedBy`<sup>Required</sup> <a name="LastUpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.lastUpdatedBy"></a>

```go
func LastUpdatedBy() *string
```

- *Type:* *string

---

##### `MetricList`<sup>Required</sup> <a name="MetricList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricList"></a>

```go
func MetricList() DataOciStackMonitoringMetricExtensionMetricListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList">DataOciStackMonitoringMetricExtensionMetricListStructList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublishTrigger`<sup>Required</sup> <a name="PublishTrigger" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.publishTrigger"></a>

```go
func PublishTrigger() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `QueryProperties`<sup>Required</sup> <a name="QueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.queryProperties"></a>

```go
func QueryProperties() DataOciStackMonitoringMetricExtensionQueryPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList">DataOciStackMonitoringMetricExtensionQueryPropertiesList</a>

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ResourceUri`<sup>Required</sup> <a name="ResourceUri" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.resourceUri"></a>

```go
func ResourceUri() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `MetricExtensionIdInput`<sup>Optional</sup> <a name="MetricExtensionIdInput" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionIdInput"></a>

```go
func MetricExtensionIdInput() *string
```

- *Type:* *string

---

##### `MetricExtensionId`<sup>Required</sup> <a name="MetricExtensionId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.metricExtensionId"></a>

```go
func MetricExtensionId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtension.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMetricExtensionConfig <a name="DataOciStackMonitoringMetricExtensionConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	MetricExtensionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.metricExtensionId">MetricExtensionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MetricExtensionId`<sup>Required</sup> <a name="MetricExtensionId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionConfig.property.metricExtensionId"></a>

```go
MetricExtensionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}.

---

### DataOciStackMonitoringMetricExtensionEnabledOnResources <a name="DataOciStackMonitoringMetricExtensionEnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionEnabledOnResources {

}
```


### DataOciStackMonitoringMetricExtensionMetricListStruct <a name="DataOciStackMonitoringMetricExtensionMetricListStruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionMetricListStruct {

}
```


### DataOciStackMonitoringMetricExtensionQueryProperties <a name="DataOciStackMonitoringMetricExtensionQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionQueryProperties {

}
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails {

}
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails {

}
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails {

}
```


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

&dataocistackmonitoringmetricextension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMetricExtensionEnabledOnResourcesList <a name="DataOciStackMonitoringMetricExtensionEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionEnabledOnResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionEnabledOnResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference <a name="DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources">DataOciStackMonitoringMetricExtensionEnabledOnResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionEnabledOnResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionEnabledOnResources">DataOciStackMonitoringMetricExtensionEnabledOnResources</a>

---


### DataOciStackMonitoringMetricExtensionMetricListStructList <a name="DataOciStackMonitoringMetricExtensionMetricListStructList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionMetricListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionMetricListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionMetricListStructOutputReference <a name="DataOciStackMonitoringMetricExtensionMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionMetricListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionMetricListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression">ComputeExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension">IsDimension</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden">IsHidden</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory">MetricCategory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.unit">Unit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct">DataOciStackMonitoringMetricExtensionMetricListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComputeExpression`<sup>Required</sup> <a name="ComputeExpression" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.computeExpression"></a>

```go
func ComputeExpression() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IsDimension`<sup>Required</sup> <a name="IsDimension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isDimension"></a>

```go
func IsDimension() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHidden`<sup>Required</sup> <a name="IsHidden" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.isHidden"></a>

```go
func IsHidden() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MetricCategory`<sup>Required</sup> <a name="MetricCategory" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.metricCategory"></a>

```go
func MetricCategory() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.unit"></a>

```go
func Unit() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionMetricListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionMetricListStruct">DataOciStackMonitoringMetricExtensionMetricListStruct</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">InParamPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue">InParamValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InParamPosition`<sup>Required</sup> <a name="InParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```go
func InParamPosition() *f64
```

- *Type:* *f64

---

##### `InParamValue`<sup>Required</sup> <a name="InParamValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```go
func InParamValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">OutParamPosition</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType">OutParamType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OutParamPosition`<sup>Required</sup> <a name="OutParamPosition" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```go
func OutParamPosition() *f64
```

- *Type:* *f64

---

##### `OutParamType`<sup>Required</sup> <a name="OutParamType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```go
func OutParamType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments">Arguments</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix">AutoRowPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod">CollectionMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command">Command</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric">IdentityMetric</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails">InParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled">IsMetricServiceEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes">JmxAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery">ManagedBeanQuery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails">OutParamDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails">ScriptDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails">SqlDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType">SqlType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith">StartsWith</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties">DataOciStackMonitoringMetricExtensionQueryProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.arguments"></a>

```go
func Arguments() *string
```

- *Type:* *string

---

##### `AutoRowPrefix`<sup>Required</sup> <a name="AutoRowPrefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```go
func AutoRowPrefix() *string
```

- *Type:* *string

---

##### `CollectionMethod`<sup>Required</sup> <a name="CollectionMethod" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.collectionMethod"></a>

```go
func CollectionMethod() *string
```

- *Type:* *string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.command"></a>

```go
func Command() *string
```

- *Type:* *string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `IdentityMetric`<sup>Required</sup> <a name="IdentityMetric" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.identityMetric"></a>

```go
func IdentityMetric() *string
```

- *Type:* *string

---

##### `InParamDetails`<sup>Required</sup> <a name="InParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.inParamDetails"></a>

```go
func InParamDetails() DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList</a>

---

##### `IsMetricServiceEnabled`<sup>Required</sup> <a name="IsMetricServiceEnabled" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```go
func IsMetricServiceEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `JmxAttributes`<sup>Required</sup> <a name="JmxAttributes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.jmxAttributes"></a>

```go
func JmxAttributes() *string
```

- *Type:* *string

---

##### `ManagedBeanQuery`<sup>Required</sup> <a name="ManagedBeanQuery" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```go
func ManagedBeanQuery() *string
```

- *Type:* *string

---

##### `OutParamDetails`<sup>Required</sup> <a name="OutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.outParamDetails"></a>

```go
func OutParamDetails() DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList</a>

---

##### `ScriptDetails`<sup>Required</sup> <a name="ScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.scriptDetails"></a>

```go
func ScriptDetails() DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList</a>

---

##### `SqlDetails`<sup>Required</sup> <a name="SqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlDetails"></a>

```go
func SqlDetails() DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList</a>

---

##### `SqlType`<sup>Required</sup> <a name="SqlType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.sqlType"></a>

```go
func SqlType() *string
```

- *Type:* *string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.startsWith"></a>

```go
func StartsWith() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryProperties">DataOciStackMonitoringMetricExtensionQueryProperties</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails</a>

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get"></a>

```go
func Get(index *f64) DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocistackmonitoringmetricextension"

dataocistackmonitoringmetricextension.NewDataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">ScriptFileName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ScriptFileName`<sup>Required</sup> <a name="ScriptFileName" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```go
func ScriptFileName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtension.DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails</a>

---



