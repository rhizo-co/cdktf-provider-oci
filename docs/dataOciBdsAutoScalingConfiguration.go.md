# `dataOciBdsAutoScalingConfiguration` Submodule <a name="`dataOciBdsAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsAutoScalingConfiguration <a name="DataOciBdsAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration oci_bds_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfiguration(scope Construct, id *string, config DataOciBdsAutoScalingConfigurationConfig) DataOciBdsAutoScalingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig">DataOciBdsAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig">DataOciBdsAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfiguration_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciBdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciBdsAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciBdsAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policy">Policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList">DataOciBdsAutoScalingConfigurationPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policyDetails">PolicyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationIdInput">AutoScalingConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationId">AutoScalingConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policy"></a>

```go
func Policy() DataOciBdsAutoScalingConfigurationPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList">DataOciBdsAutoScalingConfigurationPolicyList</a>

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.policyDetails"></a>

```go
func PolicyDetails() DataOciBdsAutoScalingConfigurationPolicyDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `AutoScalingConfigurationIdInput`<sup>Optional</sup> <a name="AutoScalingConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationIdInput"></a>

```go
func AutoScalingConfigurationIdInput() *string
```

- *Type:* *string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `AutoScalingConfigurationId`<sup>Required</sup> <a name="AutoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.autoScalingConfigurationId"></a>

```go
func AutoScalingConfigurationId() *string
```

- *Type:* *string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsAutoScalingConfigurationConfig <a name="DataOciBdsAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AutoScalingConfigurationId: *string,
	BdsInstanceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.autoScalingConfigurationId">AutoScalingConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoScalingConfigurationId`<sup>Required</sup> <a name="AutoScalingConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.autoScalingConfigurationId"></a>

```go
AutoScalingConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#auto_scaling_configuration_id DataOciBdsAutoScalingConfiguration#auto_scaling_configuration_id}.

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_auto_scaling_configuration#bds_instance_id DataOciBdsAutoScalingConfiguration#bds_instance_id}.

---

### DataOciBdsAutoScalingConfigurationPolicy <a name="DataOciBdsAutoScalingConfigurationPolicy" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicy {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetails <a name="DataOciBdsAutoScalingConfigurationPolicyDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig {

}
```


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig {

}
```


### DataOciBdsAutoScalingConfigurationPolicyRules <a name="DataOciBdsAutoScalingConfigurationPolicyRules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyRules {

}
```


### DataOciBdsAutoScalingConfigurationPolicyRulesMetric <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric {

}
```


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

&dataocibdsautoscalingconfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBdsAutoScalingConfigurationPolicyDetailsList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig">ScaleDownConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig">ScaleInConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig">ScaleOutConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig">ScaleUpConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails">ScheduleDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType">TriggerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails">DataOciBdsAutoScalingConfigurationPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `ScaleDownConfig`<sup>Required</sup> <a name="ScaleDownConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```go
func ScaleDownConfig() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList</a>

---

##### `ScaleInConfig`<sup>Required</sup> <a name="ScaleInConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig"></a>

```go
func ScaleInConfig() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList</a>

---

##### `ScaleOutConfig`<sup>Required</sup> <a name="ScaleOutConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```go
func ScaleOutConfig() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList</a>

---

##### `ScaleUpConfig`<sup>Required</sup> <a name="ScaleUpConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```go
func ScaleUpConfig() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList</a>

---

##### `ScheduleDetails`<sup>Required</sup> <a name="ScheduleDetails" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails"></a>

```go
func ScheduleDetails() DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a>

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType"></a>

```go
func TriggerType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetails">DataOciBdsAutoScalingConfigurationPolicyDetails</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">MemoryStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">MinMemoryPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">MinOcpusPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">OcpuStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryStepSize`<sup>Required</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```go
func MemoryStepSize() *f64
```

- *Type:* *f64

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```go
func Metric() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricList</a>

---

##### `MinMemoryPerNode`<sup>Required</sup> <a name="MinMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```go
func MinMemoryPerNode() *f64
```

- *Type:* *f64

---

##### `MinOcpusPerNode`<sup>Required</sup> <a name="MinOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```go
func MinOcpusPerNode() *f64
```

- *Type:* *f64

---

##### `OcpuStepSize`<sup>Required</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```go
func OcpuStepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize">StepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```go
func Metric() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricList</a>

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *f64
```

- *Type:* *f64

---

##### `StepSize`<sup>Required</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```go
func StepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize">StepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```go
func Metric() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricList</a>

---

##### `StepSize`<sup>Required</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```go
func StepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">MaxMemoryPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">MaxOcpusPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">MemoryStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">OcpuStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxMemoryPerNode`<sup>Required</sup> <a name="MaxMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```go
func MaxMemoryPerNode() *f64
```

- *Type:* *f64

---

##### `MaxOcpusPerNode`<sup>Required</sup> <a name="MaxOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```go
func MaxOcpusPerNode() *f64
```

- *Type:* *f64

---

##### `MemoryStepSize`<sup>Required</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```go
func MemoryStepSize() *f64
```

- *Type:* *f64

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```go
func Metric() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricList</a>

---

##### `OcpuStepSize`<sup>Required</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```go
func OcpuStepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">TimeAndHorizontalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">TimeAndVerticalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```go
func ScheduleType() *string
```

- *Type:* *string

---

##### `TimeAndHorizontalScalingConfig`<sup>Required</sup> <a name="TimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```go
func TimeAndHorizontalScalingConfig() DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `TimeAndVerticalScalingConfig`<sup>Required</sup> <a name="TimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```go
func TimeAndVerticalScalingConfig() DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetails</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">TargetNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">TimeRecurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNodeCount`<sup>Required</sup> <a name="TargetNodeCount" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```go
func TargetNodeCount() *f64
```

- *Type:* *f64

---

##### `TimeRecurrence`<sup>Required</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```go
func TimeRecurrence() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">TargetMemoryPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">TargetOcpusPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">TargetShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">TimeRecurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetMemoryPerNode`<sup>Required</sup> <a name="TargetMemoryPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```go
func TargetMemoryPerNode() *f64
```

- *Type:* *f64

---

##### `TargetOcpusPerNode`<sup>Required</sup> <a name="TargetOcpusPerNode" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```go
func TargetOcpusPerNode() *f64
```

- *Type:* *f64

---

##### `TargetShape`<sup>Required</sup> <a name="TargetShape" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```go
func TargetShape() *string
```

- *Type:* *string

---

##### `TimeRecurrence`<sup>Required</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```go
func TimeRecurrence() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig">DataOciBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig</a>

---


### DataOciBdsAutoScalingConfigurationPolicyList <a name="DataOciBdsAutoScalingConfigurationPolicyList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList">DataOciBdsAutoScalingConfigurationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy">DataOciBdsAutoScalingConfigurationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.rules"></a>

```go
func Rules() DataOciBdsAutoScalingConfigurationPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList">DataOciBdsAutoScalingConfigurationPolicyRulesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicy">DataOciBdsAutoScalingConfigurationPolicy</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyRulesMetricList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyRulesMetricList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric">DataOciBdsAutoScalingConfigurationPolicyRulesMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold"></a>

```go
func Threshold() DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetric">DataOciBdsAutoScalingConfigurationPolicyRulesMetric</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get"></a>

```go
func Get(index *f64) DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold">DataOciBdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---


### DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference <a name="DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsautoscalingconfiguration"

dataocibdsautoscalingconfiguration.NewDataOciBdsAutoScalingConfigurationPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules">DataOciBdsAutoScalingConfigurationPolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric"></a>

```go
func Metric() DataOciBdsAutoScalingConfigurationPolicyRulesMetricList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesMetricList">DataOciBdsAutoScalingConfigurationPolicyRulesMetricList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciBdsAutoScalingConfigurationPolicyRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsAutoScalingConfiguration.DataOciBdsAutoScalingConfigurationPolicyRules">DataOciBdsAutoScalingConfigurationPolicyRules</a>

---



