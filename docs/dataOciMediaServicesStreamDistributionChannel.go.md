# `dataOciMediaServicesStreamDistributionChannel` Submodule <a name="`dataOciMediaServicesStreamDistributionChannel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesStreamDistributionChannel <a name="DataOciMediaServicesStreamDistributionChannel" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel oci_media_services_stream_distribution_channel}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

dataocimediaservicesstreamdistributionchannel.NewDataOciMediaServicesStreamDistributionChannel(scope Construct, id *string, config DataOciMediaServicesStreamDistributionChannelConfig) DataOciMediaServicesStreamDistributionChannel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig">DataOciMediaServicesStreamDistributionChannelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig">DataOciMediaServicesStreamDistributionChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

dataocimediaservicesstreamdistributionchannel.DataOciMediaServicesStreamDistributionChannel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

dataocimediaservicesstreamdistributionchannel.DataOciMediaServicesStreamDistributionChannel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

dataocimediaservicesstreamdistributionchannel.DataOciMediaServicesStreamDistributionChannel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

dataocimediaservicesstreamdistributionchannel.DataOciMediaServicesStreamDistributionChannel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMediaServicesStreamDistributionChannel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMediaServicesStreamDistributionChannel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMediaServicesStreamDistributionChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesStreamDistributionChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.isLockOverride">IsLockOverride</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.locks">Locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList">DataOciMediaServicesStreamDistributionChannelLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelIdInput">StreamDistributionChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelId">StreamDistributionChannelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLockOverride`<sup>Required</sup> <a name="IsLockOverride" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.isLockOverride"></a>

```go
func IsLockOverride() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locks`<sup>Required</sup> <a name="Locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.locks"></a>

```go
func Locks() DataOciMediaServicesStreamDistributionChannelLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList">DataOciMediaServicesStreamDistributionChannelLocksList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `StreamDistributionChannelIdInput`<sup>Optional</sup> <a name="StreamDistributionChannelIdInput" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelIdInput"></a>

```go
func StreamDistributionChannelIdInput() *string
```

- *Type:* *string

---

##### `StreamDistributionChannelId`<sup>Required</sup> <a name="StreamDistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.streamDistributionChannelId"></a>

```go
func StreamDistributionChannelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesStreamDistributionChannelConfig <a name="DataOciMediaServicesStreamDistributionChannelConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

&dataocimediaservicesstreamdistributionchannel.DataOciMediaServicesStreamDistributionChannelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	StreamDistributionChannelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.streamDistributionChannelId">StreamDistributionChannelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel#stream_distribution_channel_id DataOciMediaServicesStreamDistributionChannel#stream_distribution_channel_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `StreamDistributionChannelId`<sup>Required</sup> <a name="StreamDistributionChannelId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelConfig.property.streamDistributionChannelId"></a>

```go
StreamDistributionChannelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_stream_distribution_channel#stream_distribution_channel_id DataOciMediaServicesStreamDistributionChannel#stream_distribution_channel_id}.

---

### DataOciMediaServicesStreamDistributionChannelLocks <a name="DataOciMediaServicesStreamDistributionChannelLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

&dataocimediaservicesstreamdistributionchannel.DataOciMediaServicesStreamDistributionChannelLocks {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesStreamDistributionChannelLocksList <a name="DataOciMediaServicesStreamDistributionChannelLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

dataocimediaservicesstreamdistributionchannel.NewDataOciMediaServicesStreamDistributionChannelLocksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMediaServicesStreamDistributionChannelLocksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.get"></a>

```go
func Get(index *f64) DataOciMediaServicesStreamDistributionChannelLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMediaServicesStreamDistributionChannelLocksOutputReference <a name="DataOciMediaServicesStreamDistributionChannelLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimediaservicesstreamdistributionchannel"

dataocimediaservicesstreamdistributionchannel.NewDataOciMediaServicesStreamDistributionChannelLocksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMediaServicesStreamDistributionChannelLocksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceId">RelatedResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks">DataOciMediaServicesStreamDistributionChannelLocks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `RelatedResourceId`<sup>Required</sup> <a name="RelatedResourceId" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.relatedResourceId"></a>

```go
func RelatedResourceId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocksOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMediaServicesStreamDistributionChannelLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesStreamDistributionChannel.DataOciMediaServicesStreamDistributionChannelLocks">DataOciMediaServicesStreamDistributionChannelLocks</a>

---



