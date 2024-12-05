# `dataOciGoldenGateDeploymentUpgrade` Submodule <a name="`dataOciGoldenGateDeploymentUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGoldenGateDeploymentUpgrade <a name="DataOciGoldenGateDeploymentUpgrade" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade oci_golden_gate_deployment_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedeploymentupgrade"

dataocigoldengatedeploymentupgrade.NewDataOciGoldenGateDeploymentUpgrade(scope Construct, id *string, config DataOciGoldenGateDeploymentUpgradeConfig) DataOciGoldenGateDeploymentUpgrade
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig">DataOciGoldenGateDeploymentUpgradeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig">DataOciGoldenGateDeploymentUpgradeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGoldenGateDeploymentUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedeploymentupgrade"

dataocigoldengatedeploymentupgrade.DataOciGoldenGateDeploymentUpgrade_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedeploymentupgrade"

dataocigoldengatedeploymentupgrade.DataOciGoldenGateDeploymentUpgrade_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedeploymentupgrade"

dataocigoldengatedeploymentupgrade.DataOciGoldenGateDeploymentUpgrade_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedeploymentupgrade"

dataocigoldengatedeploymentupgrade.DataOciGoldenGateDeploymentUpgrade_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGoldenGateDeploymentUpgrade resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGoldenGateDeploymentUpgrade to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGoldenGateDeploymentUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGoldenGateDeploymentUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentId">DeploymentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeType">DeploymentUpgradeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isCancelAllowed">IsCancelAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRescheduleAllowed">IsRescheduleAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRollbackAllowed">IsRollbackAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSecurityFix">IsSecurityFix</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSnoozed">IsSnoozed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleSubState">LifecycleSubState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.oggVersion">OggVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.previousOggVersion">PreviousOggVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.releaseType">ReleaseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeFinished">TimeFinished</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeOggVersionSupportedUntil">TimeOggVersionSupportedUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeReleased">TimeReleased</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSchedule">TimeSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeScheduleMax">TimeScheduleMax</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSnoozedUntil">TimeSnoozedUntil</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeIdInput">DeploymentUpgradeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeId">DeploymentUpgradeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeploymentId`<sup>Required</sup> <a name="DeploymentId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentId"></a>

```go
func DeploymentId() *string
```

- *Type:* *string

---

##### `DeploymentUpgradeType`<sup>Required</sup> <a name="DeploymentUpgradeType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeType"></a>

```go
func DeploymentUpgradeType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsCancelAllowed`<sup>Required</sup> <a name="IsCancelAllowed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isCancelAllowed"></a>

```go
func IsCancelAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRescheduleAllowed`<sup>Required</sup> <a name="IsRescheduleAllowed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRescheduleAllowed"></a>

```go
func IsRescheduleAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsRollbackAllowed`<sup>Required</sup> <a name="IsRollbackAllowed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isRollbackAllowed"></a>

```go
func IsRollbackAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSecurityFix`<sup>Required</sup> <a name="IsSecurityFix" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSecurityFix"></a>

```go
func IsSecurityFix() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsSnoozed`<sup>Required</sup> <a name="IsSnoozed" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.isSnoozed"></a>

```go
func IsSnoozed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `LifecycleSubState`<sup>Required</sup> <a name="LifecycleSubState" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.lifecycleSubState"></a>

```go
func LifecycleSubState() *string
```

- *Type:* *string

---

##### `OggVersion`<sup>Required</sup> <a name="OggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.oggVersion"></a>

```go
func OggVersion() *string
```

- *Type:* *string

---

##### `PreviousOggVersion`<sup>Required</sup> <a name="PreviousOggVersion" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.previousOggVersion"></a>

```go
func PreviousOggVersion() *string
```

- *Type:* *string

---

##### `ReleaseType`<sup>Required</sup> <a name="ReleaseType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.releaseType"></a>

```go
func ReleaseType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeFinished`<sup>Required</sup> <a name="TimeFinished" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeFinished"></a>

```go
func TimeFinished() *string
```

- *Type:* *string

---

##### `TimeOggVersionSupportedUntil`<sup>Required</sup> <a name="TimeOggVersionSupportedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeOggVersionSupportedUntil"></a>

```go
func TimeOggVersionSupportedUntil() *string
```

- *Type:* *string

---

##### `TimeReleased`<sup>Required</sup> <a name="TimeReleased" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeReleased"></a>

```go
func TimeReleased() *string
```

- *Type:* *string

---

##### `TimeSchedule`<sup>Required</sup> <a name="TimeSchedule" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSchedule"></a>

```go
func TimeSchedule() *string
```

- *Type:* *string

---

##### `TimeScheduleMax`<sup>Required</sup> <a name="TimeScheduleMax" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeScheduleMax"></a>

```go
func TimeScheduleMax() *string
```

- *Type:* *string

---

##### `TimeSnoozedUntil`<sup>Required</sup> <a name="TimeSnoozedUntil" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeSnoozedUntil"></a>

```go
func TimeSnoozedUntil() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DeploymentUpgradeIdInput`<sup>Optional</sup> <a name="DeploymentUpgradeIdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeIdInput"></a>

```go
func DeploymentUpgradeIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DeploymentUpgradeId`<sup>Required</sup> <a name="DeploymentUpgradeId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.deploymentUpgradeId"></a>

```go
func DeploymentUpgradeId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgrade.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGoldenGateDeploymentUpgradeConfig <a name="DataOciGoldenGateDeploymentUpgradeConfig" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigoldengatedeploymentupgrade"

&dataocigoldengatedeploymentupgrade.DataOciGoldenGateDeploymentUpgradeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeploymentUpgradeId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.deploymentUpgradeId">DeploymentUpgradeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#deployment_upgrade_id DataOciGoldenGateDeploymentUpgrade#deployment_upgrade_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#id DataOciGoldenGateDeploymentUpgrade#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeploymentUpgradeId`<sup>Required</sup> <a name="DeploymentUpgradeId" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.deploymentUpgradeId"></a>

```go
DeploymentUpgradeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#deployment_upgrade_id DataOciGoldenGateDeploymentUpgrade#deployment_upgrade_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGoldenGateDeploymentUpgrade.DataOciGoldenGateDeploymentUpgradeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/golden_gate_deployment_upgrade#id DataOciGoldenGateDeploymentUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



