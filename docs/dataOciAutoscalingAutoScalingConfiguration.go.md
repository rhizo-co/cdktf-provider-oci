# `dataOciAutoscalingAutoScalingConfiguration` Submodule <a name="`dataOciAutoscalingAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAutoscalingAutoScalingConfiguration <a name="DataOciAutoscalingAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration oci_autoscaling_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfiguration(scope Construct, id *string, config DataOciAutoscalingAutoScalingConfigurationConfig) DataOciAutoscalingAutoScalingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig">DataOciAutoscalingAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig">DataOciAutoscalingAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAutoscalingAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAutoscalingAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAutoscalingAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAutoscalingAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingResources">AutoScalingResources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.coolDownInSeconds">CoolDownInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.maxResourceCount">MaxResourceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.minResourceCount">MinResourceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.policies">Policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList">DataOciAutoscalingAutoScalingConfigurationPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationIdInput">AutoScalingConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationId">AutoScalingConfigurationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AutoScalingResources`<sup>Required</sup> <a name="AutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingResources"></a>

```go
func AutoScalingResources() DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList">DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CoolDownInSeconds`<sup>Required</sup> <a name="CoolDownInSeconds" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.coolDownInSeconds"></a>

```go
func CoolDownInSeconds() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxResourceCount`<sup>Required</sup> <a name="MaxResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.maxResourceCount"></a>

```go
func MaxResourceCount() *f64
```

- *Type:* *f64

---

##### `MinResourceCount`<sup>Required</sup> <a name="MinResourceCount" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.minResourceCount"></a>

```go
func MinResourceCount() *f64
```

- *Type:* *f64

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.policies"></a>

```go
func Policies() DataOciAutoscalingAutoScalingConfigurationPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList">DataOciAutoscalingAutoScalingConfigurationPoliciesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `AutoScalingConfigurationIdInput`<sup>Optional</sup> <a name="AutoScalingConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationIdInput"></a>

```go
func AutoScalingConfigurationIdInput() *string
```

- *Type:* *string

---

##### `AutoScalingConfigurationId`<sup>Required</sup> <a name="AutoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.autoScalingConfigurationId"></a>

```go
func AutoScalingConfigurationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAutoscalingAutoScalingConfigurationAutoScalingResources <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResources" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources {

}
```


### DataOciAutoscalingAutoScalingConfigurationConfig <a name="DataOciAutoscalingAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoScalingConfigurationId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.autoScalingConfigurationId">AutoScalingConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#auto_scaling_configuration_id DataOciAutoscalingAutoScalingConfiguration#auto_scaling_configuration_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoScalingConfigurationId`<sup>Required</sup> <a name="AutoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationConfig.property.autoScalingConfigurationId"></a>

```go
AutoScalingConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/autoscaling_auto_scaling_configuration#auto_scaling_configuration_id DataOciAutoscalingAutoScalingConfiguration#auto_scaling_configuration_id}.

---

### DataOciAutoscalingAutoScalingConfigurationPolicies <a name="DataOciAutoscalingAutoScalingConfigurationPolicies" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies {

}
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity {

}
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule {

}
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction {

}
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRules <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules {

}
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction {

}
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric {

}
```


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

&dataociautoscalingautoscalingconfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationAutoScalingResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationAutoScalingResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationAutoScalingResources">DataOciAutoscalingAutoScalingConfigurationAutoScalingResources</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial">Initial</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max">Max</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min">Min</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Initial`<sup>Required</sup> <a name="Initial" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.initial"></a>

```go
func Initial() *f64
```

- *Type:* *f64

---

##### `Max`<sup>Required</sup> <a name="Max" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.max"></a>

```go
func Max() *f64
```

- *Type:* *f64

---

##### `Min`<sup>Required</sup> <a name="Min" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.min"></a>

```go
func Min() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacity</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionSchedule</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity">Capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule">ExecutionSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction">ResourceAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies">DataOciAutoscalingAutoScalingConfigurationPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.capacity"></a>

```go
func Capacity() DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList">DataOciAutoscalingAutoScalingConfigurationPoliciesCapacityList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExecutionSchedule`<sup>Required</sup> <a name="ExecutionSchedule" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.executionSchedule"></a>

```go
func ExecutionSchedule() DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList">DataOciAutoscalingAutoScalingConfigurationPoliciesExecutionScheduleList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `ResourceAction`<sup>Required</sup> <a name="ResourceAction" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.resourceAction"></a>

```go
func ResourceAction() DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.rules"></a>

```go
func Rules() DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPolicies">DataOciAutoscalingAutoScalingConfigurationPolicies</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction">DataOciAutoscalingAutoScalingConfigurationPoliciesResourceAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesAction</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.threshold"></a>

```go
func Threshold() DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetric</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get"></a>

```go
func Get(index *f64) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricThreshold</a>

---


### DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference <a name="DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataociautoscalingautoscalingconfiguration"

dataociautoscalingautoscalingconfiguration.NewDataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action">Action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules">DataOciAutoscalingAutoScalingConfigurationPoliciesRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.action"></a>

```go
func Action() DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesActionList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.metric"></a>

```go
func Metric() DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList">DataOciAutoscalingAutoScalingConfigurationPoliciesRulesMetricList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAutoscalingAutoScalingConfigurationPoliciesRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAutoscalingAutoScalingConfiguration.DataOciAutoscalingAutoScalingConfigurationPoliciesRules">DataOciAutoscalingAutoScalingConfigurationPoliciesRules</a>

---



