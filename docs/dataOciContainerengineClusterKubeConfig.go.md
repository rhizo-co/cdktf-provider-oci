# `dataOciContainerengineClusterKubeConfig` Submodule <a name="`dataOciContainerengineClusterKubeConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineClusterKubeConfig <a name="DataOciContainerengineClusterKubeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config oci_containerengine_cluster_kube_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerengineclusterkubeconfig"

dataocicontainerengineclusterkubeconfig.NewDataOciContainerengineClusterKubeConfig(scope Construct, id *string, config DataOciContainerengineClusterKubeConfigConfig) DataOciContainerengineClusterKubeConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig">DataOciContainerengineClusterKubeConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig">DataOciContainerengineClusterKubeConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetExpiration">ResetExpiration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetTokenVersion">ResetTokenVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEndpoint` <a name="ResetEndpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetExpiration` <a name="ResetExpiration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetExpiration"></a>

```go
func ResetExpiration()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetTokenVersion` <a name="ResetTokenVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.resetTokenVersion"></a>

```go
func ResetTokenVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineClusterKubeConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerengineclusterkubeconfig"

dataocicontainerengineclusterkubeconfig.DataOciContainerengineClusterKubeConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerengineclusterkubeconfig"

dataocicontainerengineclusterkubeconfig.DataOciContainerengineClusterKubeConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerengineclusterkubeconfig"

dataocicontainerengineclusterkubeconfig.DataOciContainerengineClusterKubeConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerengineclusterkubeconfig"

dataocicontainerengineclusterkubeconfig.DataOciContainerengineClusterKubeConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciContainerengineClusterKubeConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciContainerengineClusterKubeConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciContainerengineClusterKubeConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineClusterKubeConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.expirationInput">ExpirationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.tokenVersionInput">TokenVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.expiration">Expiration</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.tokenVersion">TokenVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `ExpirationInput`<sup>Optional</sup> <a name="ExpirationInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.expirationInput"></a>

```go
func ExpirationInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `TokenVersionInput`<sup>Optional</sup> <a name="TokenVersionInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.tokenVersionInput"></a>

```go
func TokenVersionInput() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Expiration`<sup>Required</sup> <a name="Expiration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.expiration"></a>

```go
func Expiration() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TokenVersion`<sup>Required</sup> <a name="TokenVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.tokenVersion"></a>

```go
func TokenVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineClusterKubeConfigConfig <a name="DataOciContainerengineClusterKubeConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicontainerengineclusterkubeconfig"

&dataocicontainerengineclusterkubeconfig.DataOciContainerengineClusterKubeConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	Endpoint: *string,
	Expiration: *f64,
	Id: *string,
	TokenVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#cluster_id DataOciContainerengineClusterKubeConfig#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#endpoint DataOciContainerengineClusterKubeConfig#endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.expiration">Expiration</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#expiration DataOciContainerengineClusterKubeConfig#expiration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#id DataOciContainerengineClusterKubeConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.tokenVersion">TokenVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#token_version DataOciContainerengineClusterKubeConfig#token_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#cluster_id DataOciContainerengineClusterKubeConfig#cluster_id}.

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#endpoint DataOciContainerengineClusterKubeConfig#endpoint}.

---

##### `Expiration`<sup>Optional</sup> <a name="Expiration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.expiration"></a>

```go
Expiration *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#expiration DataOciContainerengineClusterKubeConfig#expiration}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#id DataOciContainerengineClusterKubeConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `TokenVersion`<sup>Optional</sup> <a name="TokenVersion" id="rhizo-co-terraform-provider-oci.dataOciContainerengineClusterKubeConfig.DataOciContainerengineClusterKubeConfigConfig.property.tokenVersion"></a>

```go
TokenVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_cluster_kube_config#token_version DataOciContainerengineClusterKubeConfig#token_version}.

---



