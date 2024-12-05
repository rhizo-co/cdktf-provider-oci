# `dataOciComputeinstanceagentInstanceAgentPlugin` Submodule <a name="`dataOciComputeinstanceagentInstanceAgentPlugin` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAgentPlugin <a name="DataOciComputeinstanceagentInstanceAgentPlugin" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin oci_computeinstanceagent_instance_agent_plugin}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceagentplugin"

dataocicomputeinstanceagentinstanceagentplugin.NewDataOciComputeinstanceagentInstanceAgentPlugin(scope Construct, id *string, config DataOciComputeinstanceagentInstanceAgentPluginConfig) DataOciComputeinstanceagentInstanceAgentPlugin
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig">DataOciComputeinstanceagentInstanceAgentPluginConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig">DataOciComputeinstanceagentInstanceAgentPluginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugin resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceagentplugin"

dataocicomputeinstanceagentinstanceagentplugin.DataOciComputeinstanceagentInstanceAgentPlugin_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceagentplugin"

dataocicomputeinstanceagentinstanceagentplugin.DataOciComputeinstanceagentInstanceAgentPlugin_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceagentplugin"

dataocicomputeinstanceagentinstanceagentplugin.DataOciComputeinstanceagentInstanceAgentPlugin_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceagentplugin"

dataocicomputeinstanceagentinstanceagentplugin.DataOciComputeinstanceagentInstanceAgentPlugin_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugin resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAgentPlugin to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciComputeinstanceagentInstanceAgentPlugin that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAgentPlugin to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.timeLastUpdatedUtc">TimeLastUpdatedUtc</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentIdInput">InstanceagentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginNameInput">PluginNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentId">InstanceagentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginName">PluginName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TimeLastUpdatedUtc`<sup>Required</sup> <a name="TimeLastUpdatedUtc" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.timeLastUpdatedUtc"></a>

```go
func TimeLastUpdatedUtc() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceagentIdInput`<sup>Optional</sup> <a name="InstanceagentIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentIdInput"></a>

```go
func InstanceagentIdInput() *string
```

- *Type:* *string

---

##### `PluginNameInput`<sup>Optional</sup> <a name="PluginNameInput" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginNameInput"></a>

```go
func PluginNameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceagentId`<sup>Required</sup> <a name="InstanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.instanceagentId"></a>

```go
func InstanceagentId() *string
```

- *Type:* *string

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.pluginName"></a>

```go
func PluginName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPlugin.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAgentPluginConfig <a name="DataOciComputeinstanceagentInstanceAgentPluginConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicomputeinstanceagentinstanceagentplugin"

&dataocicomputeinstanceagentinstanceagentplugin.DataOciComputeinstanceagentInstanceAgentPluginConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	InstanceagentId: *string,
	PluginName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#compartment_id DataOciComputeinstanceagentInstanceAgentPlugin#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.instanceagentId">InstanceagentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugin#instanceagent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.pluginName">PluginName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#plugin_name DataOciComputeinstanceagentInstanceAgentPlugin#plugin_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#id DataOciComputeinstanceagentInstanceAgentPlugin#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#compartment_id DataOciComputeinstanceagentInstanceAgentPlugin#compartment_id}.

---

##### `InstanceagentId`<sup>Required</sup> <a name="InstanceagentId" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.instanceagentId"></a>

```go
InstanceagentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugin#instanceagent_id}.

---

##### `PluginName`<sup>Required</sup> <a name="PluginName" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.pluginName"></a>

```go
PluginName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#plugin_name DataOciComputeinstanceagentInstanceAgentPlugin#plugin_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugin.DataOciComputeinstanceagentInstanceAgentPluginConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugin#id DataOciComputeinstanceagentInstanceAgentPlugin#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



