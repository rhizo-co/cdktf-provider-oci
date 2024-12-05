# `dataOciAnalyticsAnalyticsInstancePrivateAccessChannel` Submodule <a name="`dataOciAnalyticsAnalyticsInstancePrivateAccessChannel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannel <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannel" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel oci_analytics_analytics_instance_private_access_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.NewDataOciAnalyticsAnalyticsInstancePrivateAccessChannel(scope Construct, id *string, config DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig) DataOciAnalyticsAnalyticsInstancePrivateAccessChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstancePrivateAccessChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstancePrivateAccessChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciAnalyticsAnalyticsInstancePrivateAccessChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstancePrivateAccessChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.egressSourceIpAddresses">EgressSourceIpAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZones">PrivateSourceDnsZones</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHosts">PrivateSourceScanHosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceIdInput">AnalyticsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKeyInput">PrivateAccessChannelKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceId">AnalyticsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKey">PrivateAccessChannelKey</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EgressSourceIpAddresses`<sup>Required</sup> <a name="EgressSourceIpAddresses" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.egressSourceIpAddresses"></a>

```go
func EgressSourceIpAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.networkSecurityGroupIds"></a>

```go
func NetworkSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateSourceDnsZones`<sup>Required</sup> <a name="PrivateSourceDnsZones" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceDnsZones"></a>

```go
func PrivateSourceDnsZones() DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList</a>

---

##### `PrivateSourceScanHosts`<sup>Required</sup> <a name="PrivateSourceScanHosts" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateSourceScanHosts"></a>

```go
func PrivateSourceScanHosts() DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList</a>

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

##### `AnalyticsInstanceIdInput`<sup>Optional</sup> <a name="AnalyticsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceIdInput"></a>

```go
func AnalyticsInstanceIdInput() *string
```

- *Type:* *string

---

##### `PrivateAccessChannelKeyInput`<sup>Optional</sup> <a name="PrivateAccessChannelKeyInput" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKeyInput"></a>

```go
func PrivateAccessChannelKeyInput() *string
```

- *Type:* *string

---

##### `AnalyticsInstanceId`<sup>Required</sup> <a name="AnalyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.analyticsInstanceId"></a>

```go
func AnalyticsInstanceId() *string
```

- *Type:* *string

---

##### `PrivateAccessChannelKey`<sup>Required</sup> <a name="PrivateAccessChannelKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.privateAccessChannelKey"></a>

```go
func PrivateAccessChannelKey() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

&dataocianalyticsanalyticsinstanceprivateaccesschannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AnalyticsInstanceId: *string,
	PrivateAccessChannelKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.analyticsInstanceId">AnalyticsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#analytics_instance_id DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateAccessChannelKey">PrivateAccessChannelKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#private_access_channel_key DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#private_access_channel_key}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalyticsInstanceId`<sup>Required</sup> <a name="AnalyticsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.analyticsInstanceId"></a>

```go
AnalyticsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#analytics_instance_id DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#analytics_instance_id}.

---

##### `PrivateAccessChannelKey`<sup>Required</sup> <a name="PrivateAccessChannelKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelConfig.property.privateAccessChannelKey"></a>

```go
PrivateAccessChannelKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instance_private_access_channel#private_access_channel_key DataOciAnalyticsAnalyticsInstancePrivateAccessChannel#private_access_channel_key}.

---

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

&dataocianalyticsanalyticsinstanceprivateaccesschannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones {

}
```


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

&dataocianalyticsanalyticsinstanceprivateaccesschannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.NewDataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get"></a>

```go
func Get(index *f64) DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.NewDataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZone">DnsZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DnsZone`<sup>Required</sup> <a name="DnsZone" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.dnsZone"></a>

```go
func DnsZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZonesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceDnsZones</a>

---


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.NewDataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get"></a>

```go
func Get(index *f64) DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference <a name="DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocianalyticsanalyticsinstanceprivateaccesschannel"

dataocianalyticsanalyticsinstanceprivateaccesschannel.NewDataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostname">ScanHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPort">ScanPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ScanHostname`<sup>Required</sup> <a name="ScanHostname" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanHostname"></a>

```go
func ScanHostname() *string
```

- *Type:* *string

---

##### `ScanPort`<sup>Required</sup> <a name="ScanPort" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.scanPort"></a>

```go
func ScanPort() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHostsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstancePrivateAccessChannel.DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts">DataOciAnalyticsAnalyticsInstancePrivateAccessChannelPrivateSourceScanHosts</a>

---



