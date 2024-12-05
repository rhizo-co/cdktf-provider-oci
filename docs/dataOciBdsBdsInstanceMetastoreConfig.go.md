# `dataOciBdsBdsInstanceMetastoreConfig` Submodule <a name="`dataOciBdsBdsInstanceMetastoreConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceMetastoreConfig <a name="DataOciBdsBdsInstanceMetastoreConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config oci_bds_bds_instance_metastore_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancemetastoreconfig"

dataocibdsbdsinstancemetastoreconfig.NewDataOciBdsBdsInstanceMetastoreConfig(scope Construct, id *string, config DataOciBdsBdsInstanceMetastoreConfigConfig) DataOciBdsBdsInstanceMetastoreConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig">DataOciBdsBdsInstanceMetastoreConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig">DataOciBdsBdsInstanceMetastoreConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancemetastoreconfig"

dataocibdsbdsinstancemetastoreconfig.DataOciBdsBdsInstanceMetastoreConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancemetastoreconfig"

dataocibdsbdsinstancemetastoreconfig.DataOciBdsBdsInstanceMetastoreConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancemetastoreconfig"

dataocibdsbdsinstancemetastoreconfig.DataOciBdsBdsInstanceMetastoreConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancemetastoreconfig"

dataocibdsbdsinstancemetastoreconfig.DataOciBdsBdsInstanceMetastoreConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciBdsBdsInstanceMetastoreConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciBdsBdsInstanceMetastoreConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceMetastoreConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.activateTrigger">ActivateTrigger</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyId">BdsApiKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase">BdsApiKeyPassphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreId">MetastoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreType">MetastoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigIdInput">MetastoreConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigId">MetastoreConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ActivateTrigger`<sup>Required</sup> <a name="ActivateTrigger" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.activateTrigger"></a>

```go
func ActivateTrigger() *f64
```

- *Type:* *f64

---

##### `BdsApiKeyId`<sup>Required</sup> <a name="BdsApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyId"></a>

```go
func BdsApiKeyId() *string
```

- *Type:* *string

---

##### `BdsApiKeyPassphrase`<sup>Required</sup> <a name="BdsApiKeyPassphrase" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase"></a>

```go
func BdsApiKeyPassphrase() *string
```

- *Type:* *string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreId"></a>

```go
func MetastoreId() *string
```

- *Type:* *string

---

##### `MetastoreType`<sup>Required</sup> <a name="MetastoreType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreType"></a>

```go
func MetastoreType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `MetastoreConfigIdInput`<sup>Optional</sup> <a name="MetastoreConfigIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigIdInput"></a>

```go
func MetastoreConfigIdInput() *string
```

- *Type:* *string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `MetastoreConfigId`<sup>Required</sup> <a name="MetastoreConfigId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.metastoreConfigId"></a>

```go
func MetastoreConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceMetastoreConfigConfig <a name="DataOciBdsBdsInstanceMetastoreConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocibdsbdsinstancemetastoreconfig"

&dataocibdsbdsinstancemetastoreconfig.DataOciBdsBdsInstanceMetastoreConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	MetastoreConfigId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#bds_instance_id DataOciBdsBdsInstanceMetastoreConfig#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.metastoreConfigId">MetastoreConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#metastore_config_id DataOciBdsBdsInstanceMetastoreConfig#metastore_config_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#bds_instance_id DataOciBdsBdsInstanceMetastoreConfig#bds_instance_id}.

---

##### `MetastoreConfigId`<sup>Required</sup> <a name="MetastoreConfigId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceMetastoreConfig.DataOciBdsBdsInstanceMetastoreConfigConfig.property.metastoreConfigId"></a>

```go
MetastoreConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_metastore_config#metastore_config_id DataOciBdsBdsInstanceMetastoreConfig#metastore_config_id}.

---



