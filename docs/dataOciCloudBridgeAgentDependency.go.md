# `dataOciCloudBridgeAgentDependency` Submodule <a name="`dataOciCloudBridgeAgentDependency` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudBridgeAgentDependency <a name="DataOciCloudBridgeAgentDependency" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency oci_cloud_bridge_agent_dependency}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudbridgeagentdependency"

dataocicloudbridgeagentdependency.NewDataOciCloudBridgeAgentDependency(scope Construct, id *string, config DataOciCloudBridgeAgentDependencyConfig) DataOciCloudBridgeAgentDependency
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig">DataOciCloudBridgeAgentDependencyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig">DataOciCloudBridgeAgentDependencyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudBridgeAgentDependency resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudbridgeagentdependency"

dataocicloudbridgeagentdependency.DataOciCloudBridgeAgentDependency_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudbridgeagentdependency"

dataocicloudbridgeagentdependency.DataOciCloudBridgeAgentDependency_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudbridgeagentdependency"

dataocicloudbridgeagentdependency.DataOciCloudBridgeAgentDependency_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudbridgeagentdependency"

dataocicloudbridgeagentdependency.DataOciCloudBridgeAgentDependency_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudBridgeAgentDependency resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudBridgeAgentDependency to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudBridgeAgentDependency that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudBridgeAgentDependency to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.checksum">Checksum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyName">DependencyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyVersion">DependencyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.eTag">ETag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyIdInput">AgentDependencyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyId">AgentDependencyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.checksum"></a>

```go
func Checksum() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DependencyName`<sup>Required</sup> <a name="DependencyName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyName"></a>

```go
func DependencyName() *string
```

- *Type:* *string

---

##### `DependencyVersion`<sup>Required</sup> <a name="DependencyVersion" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.dependencyVersion"></a>

```go
func DependencyVersion() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ETag`<sup>Required</sup> <a name="ETag" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.eTag"></a>

```go
func ETag() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `AgentDependencyIdInput`<sup>Optional</sup> <a name="AgentDependencyIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyIdInput"></a>

```go
func AgentDependencyIdInput() *string
```

- *Type:* *string

---

##### `AgentDependencyId`<sup>Required</sup> <a name="AgentDependencyId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.agentDependencyId"></a>

```go
func AgentDependencyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependency.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudBridgeAgentDependencyConfig <a name="DataOciCloudBridgeAgentDependencyConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudbridgeagentdependency"

&dataocicloudbridgeagentdependency.DataOciCloudBridgeAgentDependencyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentDependencyId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.agentDependencyId">AgentDependencyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency#agent_dependency_id DataOciCloudBridgeAgentDependency#agent_dependency_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentDependencyId`<sup>Required</sup> <a name="AgentDependencyId" id="rhizo-co-terraform-provider-oci.dataOciCloudBridgeAgentDependency.DataOciCloudBridgeAgentDependencyConfig.property.agentDependencyId"></a>

```go
AgentDependencyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_bridge_agent_dependency#agent_dependency_id DataOciCloudBridgeAgentDependency#agent_dependency_id}.

---



