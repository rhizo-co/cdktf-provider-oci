# `dataOciKmsEkmsPrivateEndpoint` Submodule <a name="`dataOciKmsEkmsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciKmsEkmsPrivateEndpoint <a name="DataOciKmsEkmsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_ekms_private_endpoint oci_kms_ekms_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsekmsprivateendpoint"

dataocikmsekmsprivateendpoint.NewDataOciKmsEkmsPrivateEndpoint(scope Construct, id *string, config DataOciKmsEkmsPrivateEndpointConfig) DataOciKmsEkmsPrivateEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig">DataOciKmsEkmsPrivateEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig">DataOciKmsEkmsPrivateEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciKmsEkmsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsekmsprivateendpoint"

dataocikmsekmsprivateendpoint.DataOciKmsEkmsPrivateEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsekmsprivateendpoint"

dataocikmsekmsprivateendpoint.DataOciKmsEkmsPrivateEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsekmsprivateendpoint"

dataocikmsekmsprivateendpoint.DataOciKmsEkmsPrivateEndpoint_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsekmsprivateendpoint"

dataocikmsekmsprivateendpoint.DataOciKmsEkmsPrivateEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciKmsEkmsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciKmsEkmsPrivateEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciKmsEkmsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_ekms_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciKmsEkmsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.caBundle">CaBundle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.externalKeyManagerIp">ExternalKeyManagerIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.privateEndpointIp">PrivateEndpointIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.ekmsPrivateEndpointIdInput">EkmsPrivateEndpointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.ekmsPrivateEndpointId">EkmsPrivateEndpointId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CaBundle`<sup>Required</sup> <a name="CaBundle" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.caBundle"></a>

```go
func CaBundle() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ExternalKeyManagerIp`<sup>Required</sup> <a name="ExternalKeyManagerIp" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.externalKeyManagerIp"></a>

```go
func ExternalKeyManagerIp() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PrivateEndpointIp`<sup>Required</sup> <a name="PrivateEndpointIp" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.privateEndpointIp"></a>

```go
func PrivateEndpointIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `EkmsPrivateEndpointIdInput`<sup>Optional</sup> <a name="EkmsPrivateEndpointIdInput" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.ekmsPrivateEndpointIdInput"></a>

```go
func EkmsPrivateEndpointIdInput() *string
```

- *Type:* *string

---

##### `EkmsPrivateEndpointId`<sup>Required</sup> <a name="EkmsPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.ekmsPrivateEndpointId"></a>

```go
func EkmsPrivateEndpointId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciKmsEkmsPrivateEndpointConfig <a name="DataOciKmsEkmsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocikmsekmsprivateendpoint"

&dataocikmsekmsprivateendpoint.DataOciKmsEkmsPrivateEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EkmsPrivateEndpointId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.ekmsPrivateEndpointId">EkmsPrivateEndpointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_ekms_private_endpoint#ekms_private_endpoint_id DataOciKmsEkmsPrivateEndpoint#ekms_private_endpoint_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EkmsPrivateEndpointId`<sup>Required</sup> <a name="EkmsPrivateEndpointId" id="rhizo-co-terraform-provider-oci.dataOciKmsEkmsPrivateEndpoint.DataOciKmsEkmsPrivateEndpointConfig.property.ekmsPrivateEndpointId"></a>

```go
EkmsPrivateEndpointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/kms_ekms_private_endpoint#ekms_private_endpoint_id DataOciKmsEkmsPrivateEndpoint#ekms_private_endpoint_id}.

---



