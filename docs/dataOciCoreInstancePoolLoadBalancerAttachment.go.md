# `dataOciCoreInstancePoolLoadBalancerAttachment` Submodule <a name="`dataOciCoreInstancePoolLoadBalancerAttachment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachment <a name="DataOciCoreInstancePoolLoadBalancerAttachment" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment oci_core_instance_pool_load_balancer_attachment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancepoolloadbalancerattachment"

dataocicoreinstancepoolloadbalancerattachment.NewDataOciCoreInstancePoolLoadBalancerAttachment(scope Construct, id *string, config DataOciCoreInstancePoolLoadBalancerAttachmentConfig) DataOciCoreInstancePoolLoadBalancerAttachment
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig">DataOciCoreInstancePoolLoadBalancerAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig">DataOciCoreInstancePoolLoadBalancerAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancepoolloadbalancerattachment"

dataocicoreinstancepoolloadbalancerattachment.DataOciCoreInstancePoolLoadBalancerAttachment_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancepoolloadbalancerattachment"

dataocicoreinstancepoolloadbalancerattachment.DataOciCoreInstancePoolLoadBalancerAttachment_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancepoolloadbalancerattachment"

dataocicoreinstancepoolloadbalancerattachment.DataOciCoreInstancePoolLoadBalancerAttachment_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancepoolloadbalancerattachment"

dataocicoreinstancepoolloadbalancerattachment.DataOciCoreInstancePoolLoadBalancerAttachment_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreInstancePoolLoadBalancerAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreInstancePoolLoadBalancerAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreInstancePoolLoadBalancerAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreInstancePoolLoadBalancerAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName">BackendSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId">LoadBalancerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection">VnicSelection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput">InstancePoolLoadBalancerAttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId">InstancePoolLoadBalancerAttachmentId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.backendSetName"></a>

```go
func BackendSetName() *string
```

- *Type:* *string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.loadBalancerId"></a>

```go
func LoadBalancerId() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `VnicSelection`<sup>Required</sup> <a name="VnicSelection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.vnicSelection"></a>

```go
func VnicSelection() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolIdInput"></a>

```go
func InstancePoolIdInput() *string
```

- *Type:* *string

---

##### `InstancePoolLoadBalancerAttachmentIdInput`<sup>Optional</sup> <a name="InstancePoolLoadBalancerAttachmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentIdInput"></a>

```go
func InstancePoolLoadBalancerAttachmentIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolId"></a>

```go
func InstancePoolId() *string
```

- *Type:* *string

---

##### `InstancePoolLoadBalancerAttachmentId`<sup>Required</sup> <a name="InstancePoolLoadBalancerAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.instancePoolLoadBalancerAttachmentId"></a>

```go
func InstancePoolLoadBalancerAttachmentId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachment.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreInstancePoolLoadBalancerAttachmentConfig <a name="DataOciCoreInstancePoolLoadBalancerAttachmentConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreinstancepoolloadbalancerattachment"

&dataocicoreinstancepoolloadbalancerattachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstancePoolId: *string,
	InstancePoolLoadBalancerAttachmentId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId">InstancePoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId">InstancePoolLoadBalancerAttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolId"></a>

```go
InstancePoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_id}.

---

##### `InstancePoolLoadBalancerAttachmentId`<sup>Required</sup> <a name="InstancePoolLoadBalancerAttachmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.instancePoolLoadBalancerAttachmentId"></a>

```go
InstancePoolLoadBalancerAttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#instance_pool_load_balancer_attachment_id DataOciCoreInstancePoolLoadBalancerAttachment#instance_pool_load_balancer_attachment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreInstancePoolLoadBalancerAttachment.DataOciCoreInstancePoolLoadBalancerAttachmentConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_instance_pool_load_balancer_attachment#id DataOciCoreInstancePoolLoadBalancerAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



